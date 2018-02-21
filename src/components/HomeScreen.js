import React from 'react'
import { 
  Button, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { STARTCOLORS, COLORS } from '../constants'

export class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.homeView}>
        <StatusBar hidden={true} />
        { 
        [2,3,4].map( 
          (v,i) => 
          <TouchableOpacity
            style={[styles.button, {backgroundColor: STARTCOLORS[i]}]}
            onPress={() => { 
              navigate('Start', {mode: v})
            }}

            key={v}
          >
            <Text style={styles.text}>{v}P</Text>
          </TouchableOpacity>
        )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  homeView: { 
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: '#1e1e1e',
  },
  button: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
})
