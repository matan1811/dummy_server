const express = require('express');
const util = require('util');

const port = process.env.PORT || 8081;
let app = express();

app.get('/', (req, res) => {
	res.end("hello");
});




app.get('/v1/search', (req, res) => {
	console.log(`Got search request - ${util.inspect(req.query)}`);

	res.json({
		"name": "some name",
		"id" : 3934937498,
		"level": 4,
		"profileImage" : "https://api.adorable.io/avatars/285/3934937498",		
	})
	.end();
});

app.listen(port, () => {
	console.log("Service started");
});
