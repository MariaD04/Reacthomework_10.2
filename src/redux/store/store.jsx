import { combineReducers, compose, legacy_createStore } from "redux";
import filterReducer from "../reducers/filterReducer";
import formReducer from "../reducers/formReducer";
import listReducer from "../reducers/listReducer";

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

function configureStore() {
    return legacy_createStore(
        combineReducers({
            form: formReducer,
            filter: filterReducer,
            list: listReducer
        }),
        compose(
            ReactReduxDevTools
        )
    )
}

export default configureStore