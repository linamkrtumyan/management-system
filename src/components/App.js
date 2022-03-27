import BoardList from "./Board/List";
import { connect } from "react-redux";
import "./app.css";
import AddNewItem from "./Board/Actions/AddNewItem";
import {DragDropContext} from "react-beautiful-dnd"

function App({ lists }) {
  console.log(lists, "lists");

  const onDragEnd = () => {

  }

  // const [lists,]
  return (
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
    
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
