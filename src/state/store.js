import { createStore, applyMiddleware, combineReducers, compose } from "redux"; //combineReducers,
import thunk from "redux-thunk";
import * as appReducers from "./reducers";
import initialState from "./appState";

const reducerArgs = { ...appReducers };

const reducers = combineReducers(reducerArgs);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//const store = createStore(reducer, /* preloadedState, */ composeEnhancers(

const store = createStore(
  reducers,
  initialState, // any initial state you want to set
  composeEnhancers(applyMiddleware(thunk))
);

console.log("exporting initial store with state:", initialState);
console.log("exporting initial store with reducers", reducerArgs);

export default store;
