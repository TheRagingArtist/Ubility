const express = require('express');
const path = require('path');

const app = express();
app.use('/static' , express.static('public'));

app.get('/' , function(req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(8080, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Example app listening at http://${host}:${port}`);
});