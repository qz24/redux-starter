import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/Index";
const RoutesConfig = (_: any) => (
	<Routes>
		<Route path="/" element={<IndexPage />}></Route>
	</Routes>
);

export default RoutesConfig;
