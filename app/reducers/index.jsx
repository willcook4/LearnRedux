// Name reducer and action generator

export const nameReducer = (state = 'Annonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

// Hobbies reducer and action generators

let nextHobbyId = 1;
export const hobbiesReducer = (state = [], action) => {
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

// Movies reducer and action generators

let nextMovieId = 1;
export const moviesReducer = (state= [], action) => {
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

// Map reducer and action generators

export const mapReducer = (state={isFetching: false, url: undefined}, action)=>{
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



