import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBoard } from "../../actions";
import BoardCard from "./BoardCard";


const Boards = ({ boards, boardOrder, dispatch }) => {
  // this is the home site that shows you your boards and you can also create a Board here.

  const [newBoardTitle, setNewBoardTitle] = useState("");

  const handleChange = e => {
    setNewBoardTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBoard(newBoardTitle));
  };


  const renderBoards = () => {
    return boardOrder.map(boardID => {
      const board = boards[boardID];

      return (
        <Link
          key={boardID}
          to={`/${board.id}`}
          style={{ textDecoration: "none" }}
        >
          <BoardCard {...board} />
         </Link>
      );
    });
  };

  const renderCreateBoard = () => {
    return (
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <p>Create a new Board</p>
        <input
          onChange={handleChange}
          value={newBoardTitle}
          placeholder="Your boards title..."
          type="text"
          style={{width:"300px"}}
        />
      </form>
    );
  };

  return (
    <div>
      <div style={{display: "flex",flexWrap: "wrap"}} >{renderBoards()}</div>
      {renderCreateBoard()}
    </div>
  );
};

const mapStateToProps = state => ({
  boards: state.boards,
  boardOrder: state.boardOrder
});

export default connect(mapStateToProps)(Boards);
