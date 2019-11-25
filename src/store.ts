import reducer from "./reducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers({
    reducer
});

export type AppState = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

export default store;