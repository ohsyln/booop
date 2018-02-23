import React from 'react'
import { 
  Button, 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import { 
  STARTCOLORS, 
  COLORS,
  BOX_WIDTH,
  BOX_HEIGHT,
} from '../constants'
import * as Animatable from 'react-native-animatable'

export class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.homeView}>
        <View style={styles.innerView}>
          <StatusBar hidden={true} />
          <View style={styles.title}>
            <Animatable.Text 
              animation='rubberBand' easing="ease-out" 
              style={styles.titleText}>
                booop
            </Animatable.Text>
            <Text style={styles.description}>
              where fingers cruelly stab tiles
            </Text>
          </View>
          { 
          [2,3,4].map( 
            (v,i) => 
            <TouchableOpacity
              style={styles.button}
              onPress={() => { 
                navigate('Start', {mode: v})
              }}
              key={v}
            >
              <Animatable.View
                animation='pulse' easing='ease-out' iterationCount='infinite'
                style={[styles.animatableButton, 
                  {backgroundColor: STARTCOLORS[i]}]}
              >
                <Text style={styles.text}>{v}P</Text>
              </Animatable.View>
            </TouchableOpacity>
          )
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  homeView: { 
    backgroundColor: '#1e1e1e',
    flex: 1,
  },
  innerView: { 
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: BOX_HEIGHT * 0.1,
    marginBottom: BOX_HEIGHT * 0.1,
    marginLeft: BOX_WIDTH * 0.1,
    marginRight: BOX_WIDTH * 0.1,
  },
  title: { 
    flex: 1.5,
    flexDirection: 'column'
  },
  titleText: { 
    flex: 2,
    fontSize: 72,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Menlo',
    textAlign: 'center',
  },
  description: { 
    color: 'white',
    fontSize: 16,
    flex: 1,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    flex: 1,
    margin: 10,
  },
  animatableButton: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
})
