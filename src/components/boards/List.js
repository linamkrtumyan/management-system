import React, { useState } from "react";
import Card from "./Card";
import Create from "./Create";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { editTitle, deleteList } from "../../actions";
import "./list.css"


const List = ({ title, cards, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const renderEditInput = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <input
          type="text"
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
        />
      </form>
    );
  };

  const handleFocus = e => {
    e.target.select();
  };

  const handleChange = e => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleFinishEditing = e => {
    setIsEditing(false);
    dispatch(editTitle(listID, listTitle));
  };

  const handleDeleteList = () => {
    dispatch(deleteList(listID));
  };

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <div
      
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div className="listContainer"   >
                <div>
                  {isEditing ? (
                    renderEditInput()
                  ) : (
                    <div className="listTitleContainer" 
                      onClick={() => setIsEditing(true)}>
                      <p>{listTitle}</p>
                      <button className="deleteListButton" onClick={handleDeleteList}>
                      <img src={require("../../assets/trash.svg").default} alt="trash" />

                        {/* delete  */}
                      </button>
                    </div>
                  )}
                </div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, index) => (
                    <Card
                      key={card.id}
                      text={card.text}
                      id={card.id}
                      index={index}
                      listID={listID}
                    />
                  ))}
                  {provided.placeholder}
                  <Create listID={listID} />
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default connect()(List);
