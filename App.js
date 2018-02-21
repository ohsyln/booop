import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'

import { HomeScreen } from './src/components/HomeScreen'
import { PlayScreenContainer } from './src/components/PlayScreen'
import { StartScreenContainer } from './src/components/StartScreen'
import { ResultContainer } from './src/components/ResultScreen'
import { configureStore } from './src/store'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return( 
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Start: { screen: StartScreenContainer },
    Play: { screen: PlayScreenContainer },
    Result: { screen: ResultContainer },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  }  
);
