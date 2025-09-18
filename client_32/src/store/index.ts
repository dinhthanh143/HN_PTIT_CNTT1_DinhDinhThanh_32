import { combineReducers, createStore } from "redux";
import profileReducer from "../reducers/ProfileReducer";
import ListUserReducer from "../reducers/ListUserReducer";
import counterReducer from "../reducers/CounterReducer";
import randomReducer from "../reducers/RandomReducer";
import changeStateReducer from "../reducers/ChangeStateReducer";
import accountReducer from "../reducers/AccountReducer";
import themeReducer from "../reducers/ThemeReducer";
import todoReducer from "../reducers/TodoReducer";
const rootReducer = combineReducers({
    Profile: profileReducer,
    profiles: ListUserReducer,
    counter: counterReducer,
    random : randomReducer,
    changeState :  changeStateReducer,
    theme: themeReducer,
    account : accountReducer,
    todos: todoReducer
})
export type RootType = ReturnType<typeof rootReducer>
const store = createStore(rootReducer)
export default store