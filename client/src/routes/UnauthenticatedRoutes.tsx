import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/login";

function UnauthenicatedRoutes(props: { setToken: Function; }) {
	const setToken = props.setToken;
	return (
		<Routes>
			<Route path="/" element={<Login setToken={setToken} />} />
		</Routes>
	);
}

UnauthenicatedRoutes.propTypes = {
	setToken: PropTypes.func,
};

export default UnauthenicatedRoutes;