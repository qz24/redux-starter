import { put, call, takeLatest } from "redux-saga/effects";
import Api from "../../apis";
import { setUsers, setUsersFetched } from "../reducers/users";

const FETCH_USERS: string = "FETCH_USERS";

export const fetchUsersAction = () => {
	return {
		type: FETCH_USERS,
	};
};

function* fetchUsers(_: { type: typeof FETCH_USERS }): Generator {
	let users: Array<any> | undefined;
	try {
		users = (yield call<() => Promise<Array<any>>>(
			Api.fetchUsers
		)) as Array<any>;
	} catch (e) {}
	if (users) {
		yield put(setUsers({ users }));
		yield put(
			setUsersFetched({
				fetched: true,
			})
		);
	}
}

export default function* allSagas() {
	yield takeLatest(FETCH_USERS, fetchUsers);
}
