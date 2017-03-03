const redux = require('redux');
const axios = require('axios');

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

// Map reducer and action generators
// ---------------------------------
const mapReducer = (state={isFetching: false, url: undefined}, action)=>{
  switch(action.type) {
    case'START_LOCATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      };
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      };
    default:
      return state;
  }
};

const startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

const completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

const fetchLocation = () => {
  // Start, show loading etc now
  store.dispatch(startLocationFetch());
  axios.get('http://ipinfo.io').then((res)=>{
    const location = res.data.loc;
    const baseUrl = 'http://maps.google.com?q=';

    store.dispatch(completeLocationFetch(baseUrl+location));
  });
};

const reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer,
  map: mapReducer
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
  // console.log('Name is ', state.name);

  // document.getElementById('app').innerHTML = state.name;

  console.log('New state: ', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading';
  }
  else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>'
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

fetchLocation();

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

