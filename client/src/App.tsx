import { useEffect, useState } from "react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import AuthenicatedRoutes from "./routes/AuthenticatedRoutes";
import UnauthenicatedRoutes from "./routes/UnauthenticatedRoutes";

const theme = {
	colors: {
		primary: "#887222",
	},
};

const App = () => {
	const [token, setToken] = useState("valid");
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => setLoading(false), 1000)
	}, [])

	const isAuthenticated = true;

	if (loading) return <>loading</>

	return (
		<>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					{isAuthenticated && token
						? <AuthenicatedRoutes />
						: <UnauthenicatedRoutes setToken={setToken} />}
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
};

export default App;