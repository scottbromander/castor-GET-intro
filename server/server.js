const express = require('express');
const app = express();
const PORT = 5000;

const scottsDogs = ['Baxter', 'Moxie'];

app.use(express.static('server/public'));

app.get('/dogs', (req, res) => {
  console.log('Hey I got the dogs request!');
  res.send(scottsDogs);
});

app.listen(PORT, () => {
  console.log(`Express is running on ${PORT}`);
});
