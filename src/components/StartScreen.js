import React from 'react'
import { 
  StyleSheet, 
  View,
} from 'react-native'
import {connect} from 'react-redux'
import {
  COLORS,
  BGCOLOR,
  FADE_TIME,
} from '../constants'
import {List} from 'immutable'
import * as Animatable from 'react-native-animatable';
import * as Actions from '../actions'

export class StartScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  getLength(obj){
    return Object.keys(obj).length
  }

  registerPlayer(i, navigate){
    this.setState({[i]: true},
      () => this.getLength(this.state) === this.playerSize ? 
        navigate('Play') : null
    )
    this.refs['p'+i].fadeOutLeftBig(FADE_TIME)
  }

  render() {
    const { navigate } = this.props.navigation;
    this.playerSize = this.props.navigation.state.params.mode
    this.props.reset()
    this.props.setPlayers(this.playerSize)
    return (
      <View style={styles.container}>
        {[...Array(this.playerSize)].map( 
          (v,i) => 
          <Animatable.View
            ref={'p'+i}
            style={[styles.button, {backgroundColor: COLORS[i]}]}
            onTouchStart={() => this.registerPlayer(i, navigate)}
            
            key={i}
          >
          </Animatable.View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: BGCOLOR,
  },
  button: { 
    flex: 1,
    margin: 5,
  }
});

export const StartScreenContainer = connect(
  null,
  Actions
)(StartScreen)
