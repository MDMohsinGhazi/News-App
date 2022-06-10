import React from "react";
import { NavLink } from "react-router-dom";

const NvLink = (props) => {
  return (
    <div>
      <NavLink
        to={props.to}
        className={({ isActive }) =>
          isActive
            ? " px-2 py-1.5 font-bold text-gold md:border-b-2 border-gold"
            : "px-2 py-1.5 hover:text-gold "
        }
      >
        {props.children}
      </NavLink>
    </div>
  );
};

export default NvLink;
