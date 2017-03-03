const axios = require('axios');

// Action generator - Change name function
export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name // Same as 'name: name'
  };
};


export const addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

export const removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};


export const addMovie = (movie) => {
  return {
    type: 'ADD_MOVIE',
    movie
  };
};

export const removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};


export const startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

export const completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  };
};

export const fetchLocation = (() => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then((res) => {
      const location = res.data.loc;
      const baseUrl = 'http://maps.google.com?q=';

      dispatch(completeLocationFetch(baseUrl + location));
    });
  };
});

