const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');        
const logger = require('./utils/logger');

const homeRoutes = require('./routing/home');
const logoutRoutes = require('./routing/logout');
const killRoutes = require('./routing/kill');
const productRoutes = require('./routing/product');

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  logger.getInfoLog(req);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', homeRoutes);
app.use('/logout', logoutRoutes);
app.use('/kill', killRoutes);
app.use('/product', productRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  logger.getProcessLog(`Serwer działa na porcie ${PORT}`);
});