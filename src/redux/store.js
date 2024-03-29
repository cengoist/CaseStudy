import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers';

export const Store = createStore(reducer, applyMiddleware(thunk));
