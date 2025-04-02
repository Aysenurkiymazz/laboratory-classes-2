const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

  res.send('Kill route - serwer nie został faktycznie zatrzymany');
});

module.exports = router;
