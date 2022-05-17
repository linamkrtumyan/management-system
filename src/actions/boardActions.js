import { CONSTANTS } from "../actions";
// import uuid from "uuidv4";

export const setActiveBoard = id => {
  console.log(id,"id redux")
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD,
    payload: id
  };
};

export const addBoard = title => {
  const id = Date.now();
  return {
    type: CONSTANTS.ADD_BOARD,
    payload: { title, id }
  };
};
