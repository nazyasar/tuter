import React from "react";

export default function PublicRoute({ children }) {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
