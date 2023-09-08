const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// This an example
app.post('/fillForm', (req, res) => {
  // Get the data from the enquiry and fill in the form
  const formData = req.body;
  // Here you can use Playwright to fill out a form on a web page
  // ...
  // Give me back the response
  res.json({ message: 'The form has been successfully filled' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});