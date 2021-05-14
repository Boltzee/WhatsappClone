import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";
import LoginReducer from "./LoginReducer";

const RootReducer = combineReducers({
    counter: CounterReducer,
    login: LoginReducer,
});

export default RootReducer;
