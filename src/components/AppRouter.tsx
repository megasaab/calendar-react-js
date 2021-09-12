import React, {FC} from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes, RoutesNames} from "../router";
import {useSelector} from "react-redux";
import {RootState} from "../store";

const AppRouter: FC = () => {
    const isAuth = useSelector((state: RootState) => state.authReducer.isAuth)
    return (
        isAuth ?
            <Switch>
                {privateRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}
                    />
                )}
                <Redirect to={RoutesNames.EVENT}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route =>
                    <Route path={route.path}
                           exact={route.exact}
                           component={route.component}
                           key={route.path}
                    />
                )}
                <Redirect to={RoutesNames.LOGIN}/>
            </Switch>
    );
};

export default AppRouter;