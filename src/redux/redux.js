import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"

import ListOfPhotoReducer from "./reducers/ListOfPhotoReducer";
import PhotoAndCommentsReducer from "./reducers/PhotoAndCommentsReducer";



let reducers = combineReducers({
    ListOfPhotoReducer,
    PhotoAndCommentsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;