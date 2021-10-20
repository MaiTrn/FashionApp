const initialState = {
  currentUser: null,
};

const rootReducer = (state = initialState, action) => {
  return {
    ...state,
    currentUser: action.currentUser,
  };
};

export default rootReducer;
