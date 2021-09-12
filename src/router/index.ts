import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface Iroute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum  RoutesNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: Iroute[] = [
    {path: RoutesNames.LOGIN, exact: true, component: Login}
];

export const privateRoutes: Iroute[] =[
    {path: RoutesNames.EVENT, exact: true, component: Event}
];