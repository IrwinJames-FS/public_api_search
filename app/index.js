const express = require('express');
const router = require('./router');

const app = express();

app.get('/', (_, res)=>res.status(200).send('Service is up'));

app.use('/api', router);

app.use((req, res, next) => {
	const error = new Error('Not Found!');
	error.status = 404;
	return next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		error: {
			message: error.message,
			status: error.status,
			method: req.method
		}
	});
});

module.exports = app;