import {GET_SIMPSONS} from './actions';

const initialState = {
  name: '',
  avatar: '',
  job: '',
  id: 0,
  simpsons: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SIMPSONS:
      return {...state, simpsons: action.payload, job: action.payload, avatar: action.payload};
    default:
      return state;
  }
}

export default userReducer;
