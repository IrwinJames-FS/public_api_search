const express = require('express');
const { apiSearchService, apiSearchServiceWithName } = require('../services/apiSearchService');
const router = express.Router();

//Fetch all Public APIs
router.get('/', (_, res, next) => apiSearchService()
.then(({data}) => res.status(200).json(data.entries))
.catch(err => next(err)));

//Fetch only ones that match exactly
router.get('/:title', (req, res, next) => {
	const { title } = req.params;

	return apiSearchServiceWithName(title)
	.then(({data}) => data.entries.find(entry => entry.API === title))
	.then(entry => {
		if(!entry) return next(); //the next middleware available should be 404 Error as no error is being provided at this time.
		return res.status(200).json(entry);
	})
	.catch(err => next(err));
});

module.exports = router;