import React from "react";
import "./button.css"
// import styled from "styled-components";
// import Button from "@material-ui/core/Button";

// const StyledButton = styled(Button)`
//   && {
//     color: white;
//     background: #5aac44;
//   }
// `;

const TrelloButton = ({ children, onClick }) => {
  return (
    <button className="saveButton"  onMouseDown={onClick}>
      {children}
    </button>
  );
};

export default TrelloButton;
