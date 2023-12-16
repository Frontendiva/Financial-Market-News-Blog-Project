const express = require('express');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware для CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // или укажите домен вашего клиента
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/posts', async (req, res) => {
  try {
    const url = 'https://remotemode.com/files/intership/front-end/financial-market-news-blog-project.json';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Ошибка при получении данных:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
