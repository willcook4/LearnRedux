const redux = require('redux');

console.log('Starting redux example');

// Name reducer and action generator
// ---------------------------------
const nameReducer = (state = 'Annonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};
// Action generator - Change name function
var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name // Same as 'name: name'
  };
};

// Hobbies reducer and action generators
// -------------------------------------
let nextHobbyId = 1;
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

const addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

const removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

// Movies reducer and action generators
// -------------------------------------
let nextMovieId = 1;
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

const addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    movie
  };
};

const removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
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
let unsubscribe = store.subscribe(()=>{
  var state = store.getState();
  console.log('Name is ', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state: ', store.getState());
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(changeName('Andrew'));

// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Running'
// });

// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Walking'
// });

store.dispatch(addHobby('Walking'));
store.dispatch(addHobby('Running'));

// store.dispatch({
//   type: 'REMOVE_HOBBY',
//   id: 2
// });
store.dispatch(removeHobby(2));

// store.dispatch({
//   type: 'ADD_MOVIE',
//   movie: {
//     name: 'Titanic',
//     genre: 'Classic'
//   }
// });
store.dispatch(addMovie({ name: 'Titanic', genre: 'Classic' }));

// store.dispatch({
//   type: 'CHANGE_NAME',
//   name: 'Emma'
// });

store.dispatch(changeName('Emma'));

// store.dispatch({
//   type: 'ADD_MOVIE',
//   movie: {
//     name: 'Empire Strikes Back',
//     genre: 'Classic'
//   }
// });
store.dispatch(addMovie({name: 'Empire Strikes Back', genre: 'Classic'}));

// store.dispatch({
//   type: 'REMOVE_MOVIE',
//   id: 1
// });

store.dispatch(removeMovie(2));

// console.log('Name should be Trevor', store.getState());

