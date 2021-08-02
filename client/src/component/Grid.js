import React from "react";
import "./Grid.css";

const Grid = ({container = false, item = false, xs = 12, md = 12, lg = 12, xl = 12, children, className=""}) => {
  return (
    <div className={`grid_xs_${xs} grid_md_${md} grid_lg_${lg} grid_xl_${xl} ${container? "grid_container": ""} ${item? "grid_item": ""} ${className} `}>
      {children}
    </div>
  );
};

export default Grid;
