import React from 'react'
import { 
  Button, 
  StyleSheet, 
  Text, 
  View,
  Dimensions,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import update from 'immutability-helper'
import {connect} from 'react-redux'
import * as Actions from '../actions'
import { 
  COLORS, 
  BGCOLOR,
  FLIPPED,
  TILES_TO_WIN,
  FADE_TIME,
  TILE_PER_HEIGHT,
  TILE_PER_WIDTH,
  TILE_PER_LEVEL,
  getRand,  
  createArray,
} from '../constants'
import debounce from 'lodash'

export class PlayScreen extends React.Component {
  constructor(props){
    super(props)
  }
  componentWillMount() {
    this.navigate = this.props.navigation.navigate
    this.totalBroken = 0
    this.brokenBeforeRegen = 0
    this.totalPlayers = this.props.count
    this.tileState = {}
    this.level = 0
    this.generateTileColorMap()
  }

  getBlockNumber(i,j) { return i*TILE_PER_WIDTH[this.level]+j; }
  hasGameEnded() { return this.totalBroken > TILES_TO_WIN }
  shouldRegenTiles() { return this.brokenBeforeRegen > this.getTotalTiles()/2 }
  getTotalTiles() { 
    return TILE_PER_HEIGHT[this.level] * TILE_PER_WIDTH[this.level] 
  }
  shouldLevelUp() { return this.totalBroken > TILE_PER_LEVEL[this.level] }

  generateTileColorMap() {
    createArray(this.getTotalTiles()).map(
      (i) => this.tileState[i] = getRand(this.totalPlayers)) 
  }
  removeTileAnimation(i) { this.refs[i].zoomOut(FADE_TIME) }
  createTileAnimation(i) { this.refs[i] ? this.refs[i].zoomIn(FADE_TIME) : null }
  regenTilesAnimation(callback) { 
    Object.entries(this.tileState).map(([key,v]) => {
      if (callback(v)) { 
        this.createTileAnimation(key)
        this.tileState[key] = getRand(this.totalPlayers)
      }  
    })
  }
  levelUp() { 
    this.level += 1
    this.brokenTiles = 0
    this.generateTileColorMap()
    this.forceUpdate(this.regenTilesAnimation(() => true))
  }
  regenTiles() { 
    this.brokenBeforeRegen = 0
    this.forceUpdate(this.regenTilesAnimation((v) => v === FLIPPED))
  }
  endGame() { 
    for(var i=0; i<this.getTotalTiles(); i++) {this.refs[i].zoomOut(FADE_TIME)}
    debounce(this.navigate({key:'r',routeName:'Result'}), 1000)
  }

  breakTile(tileIndex, player){ 
    this.props.addPoint(player)
    this.removeTileAnimation(tileIndex)

    this.totalBroken += 1;
    this.brokenBeforeRegen += 1
    this.tileState[tileIndex] = FLIPPED
    if (this.hasGameEnded()) { this.endGame(this.navigate) }
    else { 
      if(this.shouldRegenTiles()) { this.regenTiles() }
      if(this.shouldLevelUp()) { this.levelUp() }
    }
  }

  render() {
    return (
      <View style={styles.gridView}>
        {createArray(TILE_PER_HEIGHT[this.level]).map( 
          (i) => 
            <View key={i} style={styles.rowView}>
              {createArray(TILE_PER_WIDTH[this.level]).map( 
                (j) => 
                  <Animatable.View
                    ref={this.getBlockNumber(i,j)}
                    style={[
                      styles.button, 
                      {backgroundColor: 
                        COLORS[this.tileState[this.getBlockNumber(i,j)]]}
                    ]}
                    onTouchStart={() => 
                      this.breakTile(this.getBlockNumber(i,j), 
                        this.tileState[this.getBlockNumber(i,j)])}
                    
                    key={j}
                  >
                  </Animatable.View>
              )}
            </View>
        )} 
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  gridView: { 
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 5,
    backgroundColor: BGCOLOR,
  },
  rowView: { 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: { 
    flex: 1,
    margin: 5,
  }
})

const mapStateToProps = (state) => ({
  count: state.get('count')
})

export const PlayScreenContainer = connect(
  mapStateToProps,
  Actions
)(PlayScreen)
