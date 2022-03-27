import React from "react";
import AddNewItem from "./Actions/AddNewItem";
import TaskCard from "./Card/TaskCard";
import "./list.css";
import { Droppable } from "react-beautiful-dnd";

const List = ({ title, cards, listID }) => {
  console.log(title, "title");

  return (
    <Droppable droppableId={String(`list-${listID}`)}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <h4>{title}</h4>
          <div className="list-container">
            {cards.map((card, index) => (
              <TaskCard
                key={index}
                index={index}
                text={card.text}
                id={card.id}
              />
            ))}
            <AddNewItem listID={listID} />
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default List;
