import { configureStore } from "@reduxjs/toolkit";
import counter, { CounterState } from "./reducers/counter";
import users from "./reducers/users";
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		counter,
		users,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

export interface StoreState {
	counter: CounterState;
}

sagaMiddleware.run(rootSaga);

export default store;
