var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send("kamu ganteng kok gan");
});

app.listen(2212);
