const initialState = {
  sesion: false,
  useremail: "",
  username: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "loginAction": {
      return {
        sesion: true,
        useremail: action.payload.useremail,
        username: action.payload.username,
      };
    }
    case "logoutAction": {
      return initialState;
    }
    default:
      return state;
  }
};

export default authReducer;
