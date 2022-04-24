import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HashLoader from "../components/loaders/hashLoader";
import Dashboard from "../pages/authenticatedRoutes/dashboard/Dashboard";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
        <HashLoader />
      </h3>
    </div>
  );
};

const AuthenicatedRoutes = () => {
  return (
    <Suspense fallback={() => <div>FALLBACK PAGE</div>}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Suspense>
  );
}

export default AuthenicatedRoutes;