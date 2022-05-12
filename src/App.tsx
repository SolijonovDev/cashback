import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import { authRouterNames, authRouters, routerNames, routers } from "./routers";
import { useAppSelector } from "./hooks/redux";
import { Header } from "./components/Header";
import Timer from "./page/Auth/auth/Timer";

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
        <div>
          <Header />
          <Timer/>
          <Switch>
            {routers.map((v) => (
              <Route path={v.path} key={v.path} component={v.com} />
            ))}
            <Redirect to={routerNames.home} />
          </Switch>
        </div>
      )}
    </div>
  );
};

export default App;
