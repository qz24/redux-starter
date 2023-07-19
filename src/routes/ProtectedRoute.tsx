import { Route } from "react-router-dom";

const ProtectedRoute = (props: { children: Array<JSX.Element | null> }) => {
	return <Route>{props.children}</Route>;
};

export default ProtectedRoute;
