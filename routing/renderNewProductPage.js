function renderNewProductPage(productData) {
    return `
      <!DOCTYPE html>
      <html lang="pl">
      <head>
        <meta charset="UTF-8" />
        <title>Nowy Produkt</title>
      </head>
      <body>
        <h1>Dane produktu:</h1>
        <pre>${productData}</pre>
        <a href="/">Powrót do strony głównej</a>
      </body>
      </html>
    `;
  }
  
  module.exports = { renderNewProductPage };
  