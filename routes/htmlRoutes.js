// require path
const path = require('path');
// rquire router from express - activity 21 and 22, specifically in the routes in activity 22
const router = require('express').Router();

// set up a route for /notes that responds with the notes.html file
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);
// for any other routes, using * as the path, you can respond with the index.html file
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
    );
module.exports = router;