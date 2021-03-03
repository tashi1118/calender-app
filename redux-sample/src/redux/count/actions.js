import { INCREMENT, DECREMENT } from "./constants";

// reducerを呼ぶ（明示的には呼んでいなさそう）
export const increment = payload => ({
  type: INCREMENT,
  payload
});

export const decrement = payload =>({
  type: DECREMENT,
  payload
})