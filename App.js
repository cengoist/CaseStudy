import React, {Component} from 'react';
import StackNavigator from './src/components/navigator/stackNavigator';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <StackNavigator />
      </Provider>
    );
  }
}
