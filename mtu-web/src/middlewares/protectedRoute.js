import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const isLoggedIn = localStorage.getItem("login") === "true";
  const loginTime = localStorage.getItem("login_time");
  const currentTime = new Date().getTime();
  const maxSessionTime = 12 * 60 * 60 * 1000;

  const isSessionExpired = loginTime && currentTime - loginTime > maxSessionTime;

  useEffect(() => {
    if (isLoggedIn && !isSessionExpired) {
      localStorage.setItem("login_time", new Date().getTime());
    }
  }, [isLoggedIn, isSessionExpired]);

  if (isSessionExpired) {
    localStorage.removeItem("login");
    localStorage.removeItem("login_time");
    localStorage.removeItem("access_token");
    return <Navigate to="/authentication/sign-in" />;
  }

  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/authentication/sign-in" />;
}

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;
