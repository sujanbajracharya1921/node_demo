const express = require('express');
const app = express();
const path = require('path');
const logger = require('./middlewares/basic-middleware');
const route = require('./routes');

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './02-express-tutorial/navbar-app/index.html'));
// });

app.use(express.static('./public'));
app.use(express.json());
app.use('/api', route);

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.all('*', (req, res) => {
  res.status(200).send('404 No Page Found');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
});
