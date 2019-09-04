import React, {Component} from 'react';

import NavigationController from './components/NavigationController';


type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
       header: null,
    };
  
  render() {
    return <NavigationController />;
  }
}

