/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import isAutherized from '../Authorized/Authorized';

interface PrivateRouteProps extends RouteProps {
  roles: string[];
  component: React.FunctionComponent<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, roles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props): JSX.Element => {
        return isAutherized(roles) ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />;
      }}
    />
  );
};

export default PrivateRoute;
