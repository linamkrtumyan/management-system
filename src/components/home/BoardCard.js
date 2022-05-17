import React from "react";
import "./boardCard.scss";

function BoardCard({index}) {
  return (
    // <div key={index}>
      <a  className="card4" href="#">
        <h3>This is option 4</h3>
        <p className="small">
          Card description with lots of great facts and interesting details.
        </p>
        <div className="dimmer"></div>
        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
      </a>
    // </div>
  );
}

export default BoardCard;
