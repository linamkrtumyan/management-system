import React, { useState } from "react";
// import Card from "@material-ui/core/Card";
// import Typography from "@material-ui/core/Typography";
// import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
// import styled from "styled-components";
// import Icon from "@material-ui/core/Icon";
import Form from "./Form";
import { editCard, deleteCard } from "../../actions";
import { connect } from "react-redux";
import Button from "./Button";
import "./card.css"



const Card = React.memo(({ text, id, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const closeForm = e => {
    setIsEditing(false);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const saveCard = e => {
    e.preventDefault();

    dispatch(editCard(id, listID, cardText));
    setIsEditing(false);
  };

  const handleDeleteCard = e => {
    console.log(listID);
    dispatch(deleteCard(id, listID));
  };

  const renderEditForm = () => {
    return (
      <Form text={cardText} onChange={handleChange} closeForm={closeForm}>
        <Button onClick={saveCard}>Save</Button>
      </Form>
    );
  };

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >

            <div className="cardContainer"   >
            <div>
                <p className="cardTitle" >{text}</p>
              </div>
              <div>
                 <div
                 className="cardAction"
                onClick={() => setIsEditing(true)}
                // fontSize="small"
              >
                 <img src={require("../../assets/pencil.svg").default} alt="pencil" />
              </div>
              <div                  className="cardAction"
 onClick={handleDeleteCard}>
              <img src={require("../../assets/cross.svg").default} alt="cross" />

              </div>
              </div>
             

              
            </div>
          </div>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
});

export default connect()(Card);
