import { combineReducers } from "redux";
import { count } from "./count/reducer";
// viewに渡すための処理をしているだけ
const rootReducer = combineReducers({ count });

export default rootReducer