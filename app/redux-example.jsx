var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Annonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

// var oldReducer = (state = stateDefault, action) => {
//   // state = state || {name: 'Annonymous'}; Default state, This is now above in ES6 syntax
//   // console.log('New Action', action);
//   switch (action.type) {
//   case 'CHANGE_NAME':
//     return {
//       ...state,
//       name: action.name
//     };
//   case 'ADD_HOBBY':
//     return {
//       ...state,
//       hobbies: [
//         ...state.hobbies,
//         {
//           id: nextHobbyId++,
//           hobbies: action.hobby
//         }
//       ]
//     };
//     case 'REMOVE_HOBBY':
//       return {
//         ...state,
//         hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
//       };
//     case 'ADD_MOVIE':
//       return {
//         ...state,
//         movies: [
//           ...state.movies,
//           {
//             id: nextMovieId++,
//             movieName: action.movie.name,
//             movieGenre: action.movie.genre
//           }
//         ]
//       };
//     case 'REMOVE_MOVIE':
//       return {
//         ...state,
//         movies: state.movies.filter((movie) => movie.id !== action.id)
//       };
//     default:
//       return state; // No changes to state, always returns a state.
//   }
// };

const nameReducer = (state = 'Annonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

const hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobbies: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};

const moviesReducer = (state= [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movieName: action.movie.name,
          movieGenre: action.movie.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
};

const reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});


// Gets chrome redux extension working
const store = redux.createStore(
 reducer, /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
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

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});

// console.log('Name should be Trevor', store.getState());

