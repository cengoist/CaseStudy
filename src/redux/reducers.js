import {ADD} from './actions';
import {REMOVE} from './actions';

const initialState = {
  isLoading: false,
  name: '',
  id: '',
  avatar: '',
  description: '',
  simpsons: [
    {
      id: '',
      name: '',
      avatar: '',
      description: '',
    },
  ],
  message: '',
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SIMPSONS_START':
      return {...state, isLoading: true, message: ''};
    case 'GET_SIMPSONS_SUCCESS':
      return {...state, simpsons: action.payload, isLoading: false};
    case 'GET_SIMPSONS_ERROR':
      return {...state, message: action.payload, isLoading: false};
    case ADD:
      return {
        ...state,
        simpsons: {
          id: Math.random(),
          name: action.payload,
          avatar: action.payload,
          description: action.payload,
        },
      };
    case REMOVE:
      return {
        ...state,
        foodList: state.simpsons.filter(item => item.id !== action.id),
      };
    default:
      return state;
  }
};
