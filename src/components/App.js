import BoardList from "./Board/List";
import { connect } from "react-redux";
import "./app.css";
import AddNewItem from "./Board/Actions/AddNewItem";
import {DragDropContext} from "react-beautiful-dnd"
import React, {useState,useEffect} from "react"
import {sort} from "../actions"

function App({ lists, dispatch }) {
  console.log(lists, "lists");

  const onDragEnd = (result) => {
    const {destination, source, draggableId} = result; 

    if(!destination) {
      return;
    }

   dispatch(sort(
     source.droppableId,
     destination.droppableId,
     source.index,
     destination.index,
     draggableId
   ))

    
  }


  const [data, setData] = useState([])
  const [show, setShow] = useState(false)
  const [id, setID] = useState(null)



  // const [lists,]
  return (
    <>
    <DragDropContext onDragEnd={onDragEnd} >
      <div className="App">
      <div className="lists-wrapper">
        {lists.map((list, index) => (
          <BoardList listID={list.id} key={index} title={list.title} cards={list.cards} />
        ))}
        <AddNewItem list />
      </div>
    </div>
    </DragDropContext>

    
{/* {
  data.map((user) => {
    return(
      <>

      <div onClick = {() => {
        setID(user.id)
        setShow(!show)}} >
        {user.name}
      </div>
      {
        id === user.id && show ?
        <p>{user.phone}</p> :
        null
      }
     
      </>
    )
  })
} */}

    </>
    
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
