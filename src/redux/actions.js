export const GET_SIMPSONS = 'GET_SIMPSONS';

const API_URL = 'https://5fc9346b2af77700165ae514.mockapi.io/simpsons';

export const getSimpsons = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_SIMPSONS,
          payload: json,
        });
      } else {
        console.log('Veri Yok');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
