import * as React from 'react';
import API from '../utils/API';


/***
 *
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getSimpsons = async () => {
  return API.get('api', []);
};
