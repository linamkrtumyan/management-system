import React from "react";
import BoardCard from "./BoardCard";

function HomePage() {
  const array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  return (
    <div>
      <div>My Boards</div>
      <div className="boards-container">
        {array.map((arr, index) => {
          return (
            <div key={index}>
              <BoardCard index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
