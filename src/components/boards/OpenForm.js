import React from "react";
import styled from "styled-components";
import "./openForm.css"

const OpenForm = ({ list, children, onClick }) => {
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

  const OpenFormButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    margin-left: 8px;
    width: 300px;
    padding-left: 10px;
    padding-right: 10px;
    opacity: ${buttonTextOpacity};
    color: ${buttonTextColor};
    background-color: ${buttonTextBackground};
  `;

  return (
    <div className="addNewItemContainer"  onClick={onClick}>
      {/* <div>add</div> */}
      <img src={require("../../assets/plus.svg").default} alt="plus" />


      {/* <p style={{ flexShrink: 0 }}>{children}</p> */}
    </div>
  );
};

export default OpenForm;
