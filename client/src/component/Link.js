import React from "react";
import { Link as RLink, useRouteMatch } from "react-router-dom";

const Link = ({ children, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <RLink to={to}>{children}</RLink>
    </div>
  );
};

export default Link;
