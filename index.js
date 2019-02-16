const express = require('express');
const path = require('path');

const app = express();
app.use('/static' . express.static('public'))

app.get('/' . function(req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000);

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// const server = app.listen(8080, () => {
//   const host = server.address().address;
//   const port = server.address().port;

//   console.log(`Example app listening at http://${host}:${port}`);
// });