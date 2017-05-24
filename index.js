const express = require('express');


const port = process.env.PORT || 8081;
let app = express();

app.get('/', (req, res) => {
	res.end("hello");
});

app.listen(port, () => {
	console.log("Service started");
});
