import { Route, Switch } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import { useState } from "react";
import { useEffect } from "react";

function Routes() {
  const [authenticatd, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticatd]);

  return (
    <Switch>
      <Route exact path="/">
        <Cadastro authenticatd={authenticatd} />
      </Route>
      <Route path="/login">
        <Login
          authenticatd={authenticatd}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/dashboard">
        <Dashboard authenticatd={authenticatd} />
      </Route>
    </Switch>
  );
}

export default Routes;
