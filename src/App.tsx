import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Home } from "./page/Home";
import { authRouterNames, authRouters } from "./routers";
import { useAppSelector } from "./hooks/redux";

export const App: FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <div className="app">
      {!isAuth ? (
        <Switch>
          {authRouters.map((v) => (
            <Route path={v.path} key={v.path} component={v.com} />
          ))}
          <Redirect to={authRouterNames.registrationStepOne} />
        </Switch>
      ) : (
        <Switch>
          <Home />
        </Switch>
      )}
    </div>
  );
};

export default App;
