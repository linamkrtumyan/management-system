import React,{useEffect, useState} from 'react'
import { connect,useDispatch } from 'react-redux'
import { Link,useParams } from "react-router-dom";


import List from "./List";
import Create from "./Create";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort, setActiveBoard } from "../../actions";
import "./board.css"


export const Board = ({lists,cards,boards}) => {


    const dispatch = useDispatch()

      
console.log(lists,"lists")
console.log(cards,"cards")
console.log(boards,"boards")
var { boardID } = useParams();

const [id, setId] = useState(null)

console.log(boardID,"id")

useEffect(() => {
//  if(id !==null){
   dispatch(setActiveBoard(boardID))
//   }
   
   
  },[])

const board = boards[boardID];
const listOrder = board.lists;


const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };


  return (
    <div>
        <DragDropContext onDragEnd={onDragEnd}>
        <Link className='backArrow' to="/">
        <img src={require("../../assets/back.svg").default} alt="back" />
 
        {/* Go Back */}
        </Link>
        <p  className='boardTitle'  >{board.title}</p>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {provided => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{display:"flex"}}
            >
              {listOrder.map((listID, index) => {
                const list = lists[listID];
                if (list) {
                  const listCards = list.cards.map(cardID => cards[cardID]);

                  return (
                    <List
                      listID={list.id}
                      key={list.id}
                      title={list.title}
                      cards={listCards}
                      index={index}
                    />
                  );
                }
              })}
              {provided.placeholder}
              <Create list />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}



const mapStateToProps = (state) => {

    console.log(state,"state")
    return {
        lists: state.lists,
        cards: state.cards,
        boards: state.boards
    };
  };

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Board)