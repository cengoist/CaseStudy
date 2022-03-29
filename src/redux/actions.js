import axios from 'axios';
export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

export const getSimpsons = () => dispatch => {
  dispatch({type: 'GET_SIMPSONS_START'});
  axios
    .get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
    .then(data => dispatch({type: 'GET_SIMPSONS_SUCCESS', payload: data}))
    .catch(error => dispatch({type: 'GET_SIMPSONS_ERROR', payload: error}));
};
export const AddCharacters = (name, description, avatar, job, id) => ({
  type: ADD,
  payload: name,
  description,
  avatar,
  job,
  id,
});
export const removeCharacters = id => ({
  type: REMOVE,
  id: id,
});
