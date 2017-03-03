const redux = require('redux');
const thunk = require('redux-thunk').default;

const {nameReducer ,hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index');

export const configure = () => {
  const reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map: mapReducer
  });

  // (store) Object to store entire application, takes a reducer (a pure function).

  const store = redux.createStore(
   reducer, /* preloadedState, */ redux.compose(redux.applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   // Gets chrome redux extension working
  ));

  return store;
};