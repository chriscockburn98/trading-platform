import request from "supertest";
import logger from "../../global_helpers/logger";

const baseUrl = 'http://localhost:4001';

describe('Todos endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)

		logger.info({response})
	});
});