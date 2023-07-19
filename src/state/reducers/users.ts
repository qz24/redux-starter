import { createSlice } from "@reduxjs/toolkit";

export interface SetUsersPayload {
	users: Array<any>;
}

export interface SetUsersFetchedPayload {
	fetched: boolean;
}

const users = createSlice({
	name: "users",
	initialState: {
		userList: new Array<any>(),
		usersFetched: false,
	},
	reducers: {
		setUsersFetched: (state, payload) => {
			console.log("USERS: ", users);
			state.usersFetched = (
				payload as unknown as SetUsersFetchedPayload
			).fetched;
		},

		setUsers: (state, payload) => {
			console.log("PAYLOAD: ", payload);
			state.userList = (payload as unknown as SetUsersPayload).users;
		},
	},
});

export const { setUsers, setUsersFetched } = users.actions;

export default users.reducer;
