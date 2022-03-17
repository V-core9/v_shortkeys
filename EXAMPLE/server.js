const path = require('path');
const port = 11000;
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.listen(port, async () => {
  console.log(`app Started >> http://localhost:${port}`);
});
