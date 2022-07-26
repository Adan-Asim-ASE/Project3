/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/function-component-definition */

import { Navigate, Route } from 'react-router-dom';
import getCookie from '../utils/HelperFunctions';

const ProtectedRoute = ({ path, component }) => {
  const userToken = getCookie('userToken');

  if (userToken === 'none' || userToken === undefined) {
    alert('You need to login first');
    return <Navigate to="/login" replace />;
  }
  return <Route path={path} element={component} />;
};

export default ProtectedRoute;