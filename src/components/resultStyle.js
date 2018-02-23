import React from 'react'
import { StyleSheet } from 'react-native'
import { BOX_HEIGHT, BOX_WIDTH } from '../constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
  },
  sideFrame: { 
    flex: 1,
  },
  mainFrame: { 
    flex: 7,
    flexDirection: 'column',
  },
  mainFramePad: { 
    flex: 1,
  },
  actualDisplay: { 
    flex: 2,
    flexDirection: 'row',
    marginTop: BOX_HEIGHT * 0.2,
    marginBottom: BOX_HEIGHT * 0.2,
    marginLeft: BOX_WIDTH * 0.1,
    marginRight: BOX_WIDTH * 0.1,
  },
  player: { 
    flex: 1,
    flexDirection: 'column', 
  },
  playerScore: { 
    flex: 9,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  playerName: { 
    flex: 1,
    alignItems: 'center',
  },
  scoreBar: { 
    flex: 6, 
    flexDirection: 'row',
    justifyContent: 'center',
  },
  playerNameText: { 
    fontWeight: 'bold',
    fontSize: 48,
  },
  scoreColumn: { 
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 2,
  },
  tile: { 
    margin: 2,
    width: 10,
    height: 10,
  },
});
