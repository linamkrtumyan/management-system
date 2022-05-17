import { combineReducers } from "redux";
import listReducer from "./listReducer";
import cardsReducer from "./cardsReducer";
import boardsReducer from "./boardsReducer";
import boardOrderReducer from "./boardOrderReducer";
import activeBoardReducer from "./activeBoardReducer";

export default combineReducers({
  lists: listReducer,
  cards: cardsReducer,
  boards: boardsReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer
});
