import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useReducer } from 'react';

import shuffle from './shuffle';
import Board from './Board';

const SYMBOLS = ['🍚', '🍜', '🍣', '🍙', '🍡', '🍱', '🍛', '🍘'];

function reducer(state, action) {
  switch (action.type) {
    case 'make-a-guess':
      const { index } = action;
      const newRevealed = [...state.revealed, state.board[index]];

      return { ...state, guesses: state.guesses + 1, revealed: newRevealed };
    case 'reset-guess':
      return state;
    case 'reset-game':
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
    guesses: 0,
  };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, getNewState);
  return (
    <View style={styles.container}>
      <Board
        board={state.board}
        dispatch={dispatch}
        revealed={state.revealed}
      />
      <Button
        title='Guess'
        onPress={() => dispatch({ type: 'make-a-guess' })}
      />
      <Text>{JSON.stringify([state.guesses, state.revealed], null, 2)}</Text>
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
  },
});
