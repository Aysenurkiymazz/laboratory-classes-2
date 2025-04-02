const express = require('express');
const path = require('path');
const fs = require('fs');
const { renderNewProductPage } = require('./renderNewProductPage');
const router = express.Router();

router.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '../views', 'add-product.html'));
});

router.post('/add', (req, res) => {
  const { name, price } = req.body;
  const newLine = `Nazwa: ${name}, Cena: ${price}\n`;
  const productPath = path.join(__dirname, '../product.txt');
  fs.appendFile(productPath, newLine, (err) => {
    if (err) {
      return res.status(500).send('Błąd zapisu do pliku product.txt');
    }
    res.status(201).send('Produkt został dodany!');
  });
});

router.get('/new', (req, res) => {
  const productPath = path.join(__dirname, '../product.txt');
  fs.readFile(productPath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.send(renderNewProductPage('Brak danych (plik nie istnieje)'));
      }
      return res.status(500).send('Błąd odczytu pliku product.txt');
    }
    const htmlPage = renderNewProductPage(data);
    res.send(htmlPage);
  });
});

module.exports = router;


