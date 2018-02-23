import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native'
import {connect} from 'react-redux'
import {
  COLORS, 
  createArray,
  TILES_PER_COL,
} from '../constants'
import * as Actions from '../actions'
import styles from './resultStyle'
import { NavigationActions } from 'react-navigation'
import debounce from 'lodash'

export class ResultScreen extends React.Component {
  constructor(props){
    super(props)
  }
  getCols(score){ 
    return Math.ceil(score/TILES_PER_COL)
  }
  getColScore(score, colNo) {
    const cols = this.getCols(score)
    const leftover = score - colNo * TILES_PER_COL
    if (leftover > 20) return 20
    if (leftover <= 0) return 0
    return leftover
  }
  resetGame() { 
    debounce(
      this.props.navigation.dispatch(NavigationActions.reset({ 
        index: 0,
        actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        ],
        key: null 
      })),
      1000
    )
  }

  render() {
    return (
      <View 
        onTouchStart={() => this.resetGame()}
        style={styles.container}>
          <View style={styles.actualDisplay}>
            { this.props.counter.entrySeq().toArray().map(([k,val]) => 
              <View key={k} style={[styles.player]}>
                <View style={styles.playerScore}>
                  <View style={styles.sideFrame}/>
                  <View style={styles.scoreBar}>
                    {
                      [...Array(this.getCols(val))].map((v,i) => 
                        <View key={i} style={styles.scoreColumn}>
                          { 
                            [...Array(this.getColScore(val, i))].
                              map((v2,i2) => 
                                <View key={i2} style={[styles.tile,{
                                  backgroundColor: COLORS[k],
                                }]}/>
                              )
                          }
                        </View>
                      )
                    }
                  </View>
                  <View style={styles.sideFrame}/>
                </View>
                <View style={styles.playerName}>
                  <Text style={[
                    styles.playerNameText,
                    {color: COLORS[k]}
                  ]}>P{parseInt(k)+1}</Text>
                </View>
              </View>
            ) 
          }
        </View>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
  counter: state.get('counter'),
  count: state.get('count')
})

export const ResultContainer = connect(
  mapStateToProps,
  Actions
)(ResultScreen)
