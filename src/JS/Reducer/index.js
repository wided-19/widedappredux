
import { combineReducers } from "redux";
import TaskReducer from './TaskReducer';





const rootReducer = combineReducers({ task: TaskReducer}

)
export default rootReducer;