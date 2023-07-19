import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../state/store";
import { decrement, increment } from "../state/reducers/counter";
import { useEffect } from "react";
import { fetchUsersAction } from "../state/sagas";

export interface IndexPageProps {}

const IndexPage = (_: IndexPageProps) => {
	const dispatch = useDispatch();

	const state = useSelector((state: StoreState) => state.counter);

	const handleIncrement = () => {
		dispatch(increment());
	};

	const handleDecrement = () => {
		dispatch(decrement());
	};

	useEffect(() => {
		dispatch(fetchUsersAction());
	}, []);

	return (
		<div>
			<h1>Hello World</h1>
			<div>
				<p>CLick to update the counter</p>
				<p data-testid="counter-display">Counter: {state.counter}</p>
				<button onClick={handleIncrement}>Increment!</button>
				<button onClick={handleDecrement}>Decrement!</button>
			</div>
		</div>
	);
};

export default IndexPage;
