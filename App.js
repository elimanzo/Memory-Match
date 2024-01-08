import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useReducer } from 'react';

import shuffle from './shuffle';
import Board from './Board';

const SYMBOLS = ['🍚', '🍜', '🍣', '🍙', '🍡', '🍱', '🍛', '🍘'];

function reducer(state, action) {
  switch (action.type) {
    case 'make-a-guess':
      if (state.guessIndexes.length === 2) {
        return state;
      }
      const { index } = action;
      const newGuessIndexes = [...state.guessIndexes, index];
      return {
        ...state,
        guessIndexes: newGuessIndexes,
      };
    case 'reset-guess':
      let newRevealed = state.revealed;
      const guess1Index = state.guessIndexes.at(-1);
      const guess2Index = state.guessIndexes.at(-2);
      if (state.board[guess1Index] === state.board[guess2Index]) {
        newRevealed = [...state.revealed, state.board[guess1Index]];
      }
      return {
        ...state,
        revealed: newRevealed,
        guessIndexes: [],
        isGameOver: SYMBOLS.length === newRevealed.length,
        guesses: state.guesses + 1,
      };
    case 'new-game':
      return getNewState();
  }
  return state;
}

function getNewState() {
  const board = [...SYMBOLS, ...SYMBOLS];
  shuffle(board);
  return {
    board,
    revealed: [],
    guessIndexes: [],
    guesses: 0,
    isGameOver: false,
  };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, getNewState);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Memory Match</Text>
      <Board
        board={state.board}
        dispatch={dispatch}
        revealed={state.revealed}
        guessIndexes={state.guessIndexes}
      />
      {state.guessIndexes.length === 2 && (
        <TouchableOpacity
          onPress={() => dispatch({ type: 'reset-guess' })}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Guess</Text>
        </TouchableOpacity>
      )}
      {state.isGameOver && (
        <>
          <Text style={styles.gameOverText}>
            Congratulations! It took you {state.guesses} guesses to win.
          </Text>
          <TouchableOpacity
            onPress={() => dispatch({ type: 'new-game' })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>New Game!</Text>
          </TouchableOpacity>
        </>
      )}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 30,
  },
  gameOverText: {
    position: 'absolute',
    fontSize: 18,
    bottom: 140,
  },
  button: {
    position: 'absolute',
    bottom: 75,
    color: 'red',
    padding: 10,
    backgroundColor: '#BAA9D2',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
