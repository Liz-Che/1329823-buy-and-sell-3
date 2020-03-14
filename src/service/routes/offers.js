'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {Router} = require(`express`);
const router = new Router();

const {MOCK_FILE_NAME} = require(`../../constants`);

router.get(`/`, async (req, res) => {
  try {
    const content = await fs.readFile(MOCK_FILE_NAME);
    res.json(JSON.parse(content));
  } catch (err) {
    console.error(chalk.red(err));
    res.send([]);
  }
});

module.exports = router;
