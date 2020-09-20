import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBarRow.css";

function SideBarRow(props) {
  const { src, Icon, title } = props;
  return (
    <div className="sideBarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SideBarRow;
