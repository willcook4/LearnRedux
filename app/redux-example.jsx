const redux = require('redux');

console.log('Starting redux example');

const actions = require('./actions/index');
const store = require('./store/configureStore').configure();

// Subscribe to changes
const unsubscribe = store.subscribe(()=>{
  var state = store.getState();

  console.log('New state: ', store.getState());

  if(state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
  }
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie({ name: 'Titanic', genre: 'Classic' }));

store.dispatch(actions.changeName('Emma'));

store.dispatch(actions.addMovie({name: 'Empire Strikes Back', genre: 'Classic'}));

store.dispatch(actions.removeMovie(2));

