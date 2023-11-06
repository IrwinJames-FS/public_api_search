const axios = require("axios");
require('dotenv').config();

/**
 * Fetch all APIs in public api
 * @returns {Promise<Array<Object>, Error>} - a promise to get an array of api records
 */
const apiSearchService = async () => {
	console.log("Real Api Search Service");
	return await axios.get(process.env.apiUrl);
}

/**
 * Fetch API by the name from the public api
 * @param {string} name 
 * @returns {Promise<Array<Object>, Error>}
 */
const apiSearchServiceWithName = async title => {
	return await axios.get(`${process.env.apiUrl}?title=${title}`);
}

module.exports = {
	apiSearchService,
	apiSearchServiceWithName
}