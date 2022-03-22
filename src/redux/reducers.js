import {GET_SIMPSONS} from './actions';

const initialState = {
  name: '',
  avatar: '',
  job: '',
  id: 0,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SIMPSONS:
      return {...state, name: action.payload};
    default:
      return state;
  }
}

export default userReducer;
