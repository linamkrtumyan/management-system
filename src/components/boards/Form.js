import React from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import "./form.css";

const Container = styled.div`
  width: 284px;
  margin-bottom: 8px;
`;

const StyledTextArea = styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
  height: 40px;
  margin: 5px;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const Form = React.memo(
  ({ list, text = "", onChange, closeForm, children }) => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title...";

    const handleFocus = (e) => {
      e.target.select();
    };

    return (
      <Container>
        <div>
          <textarea
            placeholder={placeholder}
            autoFocus
            onFocus={handleFocus}
            value={text}
            onChange={(e) => onChange(e)}
            onBlur={closeForm}
            className="inputComponent"
          />
        </div>
        <div className="inputActionsContainer">
          {children}
          <div className="closeInput"  onClick={closeForm}>            
            <img src={require("../../assets/cross.svg").default} alt="cross" />
          </div>
        </div>
      </Container>
    );
  }
);

export default Form;
