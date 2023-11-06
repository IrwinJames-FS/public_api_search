const { apiSearchService, apiSearchServiceWithName } = require('../services/apiSearchService')

//comment out to run live tests
jest.mock("./apiSearchService");

const testObject = {
	"API": "FishWatch",
	"Description": "Information and pictures about individual fish species",
	"Auth": "",
	"HTTPS": true,
	"Cors": "yes",
	"Link": "https://www.fishwatch.gov/developers",
	"Category": "Animals"
};

describe("Testing Api Search Service", () => {
	test("Api Service Should return 1427 records", async () => {
		const result = await apiSearchService()
		const record = result.data.entries[9]; //
		expect(result.data.entries).toHaveLength(1427);
		for (const key in testObject){
			expect(record[key]).toBe(testObject[key]);
		}
	});

	test("Api Service Should return FishWatch api record", async () => {
		const API = "FishWatch";
		const result = await apiSearchServiceWithName(API);
		const record = result.data.entries.find(entry => entry.API === API);
		for (const key in testObject){
			expect(record[key]).toBe(testObject[key]);
		}
	})
});