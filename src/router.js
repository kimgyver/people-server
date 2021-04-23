var express = require('express');
const router = new express.Router();

const { insert, getOne, remove, update, search } = require('./db');
const logger = require('./logger');

router.post('/user', async (req, res) => {
  const user = ({ name, age, gender } = req.body);
  try {
    const userCreated = await insert(user);
    res.send(userCreated);
    logger.info(`Inserted. ==> ${JSON.stringify(userCreated)}`);
  } catch (e) {
    logger.error(e);
    res.status(400).send(e);
  }
});

router.get('/users', async (req, res) => {
  try {
    const { gender, age, isGreaterThan } = req.query;

    let genderParam = {};
    let ageParam = {};
    if (gender && gender.length > 0) {
      genderParam = { gender };
    }
    if (age && age.length > 0) {
      ageParam = {
        age: parseInt(age),
        isGreaterThan: isGreaterThan === 'true',
      };
    }
    const result = await search({ genderParam, ageParam });
    logger.info(`Search Done. ==> ${JSON.stringify(result)}`);
    res.json(result);
  } catch (e) {
    logger.error(e);
    res.status(500).send(e);
  }
});

router.get('/user/:_id', async (req, res) => {
  try {
    const user = await getOne(req.params._id);
    if (!user) {
      res.status(404).send();
      return;
    }
    logger.info(`GetOne. ==> ${JSON.stringify(user)}`);
    res.send(user);
  } catch (e) {
    logger.error(e);
    res.status(500).send();
  }
});

router.put('/user/:_id', async (req, res) => {
  const { name, age, gender } = req.body;
  try {
    const count = await update(req.params._id, { name, age, gender });
    if (count > 0) {
      logger.info(`Updated. ==> ${JSON.stringify(req.body)}`);
      res.status(200).send();
    } else {
      logger.error(`Update failed. Not exising ==> id: ${req.params._id}`);
      res.status(404).send();
    }
  } catch (e) {
    logger.error(e);
    res.status(400).send(e);
  }
});

router.delete('/user/:_id', async (req, res) => {
  try {
    const count = await remove(req.params._id);
    if (count > 0) {
      logger.info(`Removed. ==> id: ${req.params._id}`);
      res.status(200).send();
    } else {
      logger.error(`Remove failed. Not exising ==> id: ${req.params._id}`);
      res.status(404).send();
    }
  } catch (e) {
    logger.error(e);
    return res.status(500).send(e);
  }
});

module.exports = router;
