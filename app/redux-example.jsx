var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Annonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Annonymous'}; Default state, This is now above in ES6 syntax
  // console.log('New Action', action);
  switch (action.type) {
  case 'CHANGE_NAME':
    return {
      ...state,
      name: action.name
    };
  case 'ADD_HOBBY':
    return {
      ...state,
      hobbies: [
        ...state.hobbies,
        {
          id: nextHobbyId++,
          hobbies: action.hobby
        }
      ]
    };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            movieName: action.movie.name,
            movieGenre: action.movie.genre
          }
        ]
      };
    default:
      return state; // No changes to state, always returns a state.
  }
};
/* eslint-disable no-underscore-dangle */

// Gets chrome redux extension working
  const store = redux.createStore(
   reducer, /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */
// var store = redux.createStore(reducer, redux.compose);

  // window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

// (store) Object to store entire application, takes a reducer (a pure function).

// Subscribe to changes
var unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log('Name is ', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state: ', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Andrew'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: {
    name: 'Titanic',
    genre: 'Classic'
  }
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emma'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: {
    name: 'Empire Strikes Back',
    genre: 'Classic'
  }
});

// console.log('Name should be Trevor', store.getState());