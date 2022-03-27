import { Button, Card, Icon } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import TextareaAutosize from 'react-textarea-autosize';
import { addList, addCard } from "../../../actions"

export const AddNewItem = ({list, dispatch, listID}) => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("")


  const openForm = () => {
    setFormOpen(!formOpen)
  }

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleAddList = () => {
    setText("")
    if(text) {
      dispatch(addList(text))
    }

    return;
  }

  const handleAddCard = () => {
    setText("")

    if(text) {
      dispatch(addCard(listID, text))
    }

    return;
  }

  const buttonText = list ? "Add another list" : "Add another card";
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? "white" : "inherit";
  const buttonTextBackground = list ? "red" : "inherit";


  const placeholder = list ? "Enter list title" : "Enter a title for this card"
  const buttonTitle = list ? "Add List" : "Add Card"
  
  return [
    formOpen ? (
      <div>
        <Card style={{
          overflow:"visible",
          minHeight:80,
          minWidth:272,
          padding:"6px 8px 2px",

        }} >
        <TextareaAutosize 
        placeholder={placeholder}
        autoFocus
        onBlur={openForm}
        value = {text}
        onChange={handleInputChange}
        style={{
          resize:"none",
          width: "100%",
          overflow:"hidden",
          outline:"none",
          border:"none"
        }}
        />
        </Card>
        <div>
          <Button
          onMouseDown={list ? handleAddList : handleAddCard }
           variant="contained"
            style={{color:"white", backgroundColor:"green"}}
          >{buttonTitle}</Button>
          <Icon style={{marginLeft:8, cursor:"pointer"}} >close</Icon>
        </div>
      </div>
    ) : (
      <div
      onClick={openForm}
        style={{
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon>add</Icon>
        <span>{buttonText}</span>
      </div>
    ),
  ];
};
const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(AddNewItem);

