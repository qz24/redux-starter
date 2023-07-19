import { Axios } from "axios";
import config from "../config";

export default class HttpClient {
	private static INSTANCE: Axios;

	static getClient(): Axios {
		if (this.INSTANCE == null) {
			this.INSTANCE = new Axios({
				baseURL: config.baseUrl,
				headers: {},
			});
		}
		return this.INSTANCE;
	}
}
