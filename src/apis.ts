import HttpClient from "./utils/http";

export default {
	fetchUsers: (): Promise<Array<any>> =>
		HttpClient.getClient()
			.get("/users", {})
			.then((response) => {
				return response.data;
			}),
};
