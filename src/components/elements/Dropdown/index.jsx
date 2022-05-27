import React from "react";
import { useHistory } from "react-router-dom";
import "./dropdownStyles.css";

export const Dropdown = ({ title, options }) => {
  const history = useHistory();

  return (
    <div class="dropdown">
      <button class="dropbtn">{title} ▼</button>
      <div class="dropdown-content">
        {options.map((option) => {
          if (title === option?.title) return null;
          return (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a
              style={{ color: "#000" }}
              onClick={() => history.push(option.route)}
              class="dropdown-item"
            >
              {option.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};
