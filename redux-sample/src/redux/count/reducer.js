import { INCREMENT, DECREMENT } from "./constants";

const initState = 0;

// 直前のstateとactionを受け取る
export const count = (state = initState, {type, payload}) => {
  switch(type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state - payload;
    default:
      return state;
  }
}