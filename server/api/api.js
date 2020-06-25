const express = require('express');
const axios = require('axios');
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.post('/auth/prolongate', async (req, res) => {
  const application_id = req.body.application_id;
  const access_token = req.body.application_id;

  try {
    const url = `https://api.worldoftanks.ru/wot/auth/prolongate/`;
    const response = await axios.post(url, {
      application_id,
      access_token
    });
    try {
      console.log('response.data', response.data);
      const accessToken = response.data.data.access_token;
      const expiresAt = response.data.data.expires_at;

      res.send({ access_token: accessToken, expires_at: expiresAt });
    } catch (error) {
      res.send(response.data);
    }
  } catch (error) {
    res.send(false);
  }
});

router.get('/about', function (req, res) {
  res.send('About birds');
});

router.get('/test', (req, res) => {
  res.send('api test 2');
});

module.exports = router;
