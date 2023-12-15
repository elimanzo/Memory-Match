import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useReducer } from 'react';

import Card from './Card';

const SYMBOLS = ['🍚', '🍜', '🍣', '🍙', '🍡', '🍱', '🍛', '🍘'];

function reducer(state, action) {
  switch (action.type) {
    case 'make-a-guess':
      return { ...state, guesses: state.guesses + 1 };
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
    guesses: 0
  };
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = getRandomIndex(i + 1);
    swap(arr, randomIndex, i);
  }
}

function getRandomIndex(len) {
  return Math.floor(Math.random() * len);
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, getNewState);

  const cells = state.board.map((symbol) => <Card symbol={symbol} />);
  const rows = [];
  while (cells.length > 0) {
    rows.push(
      <View style={styles.rowStyles}>
        {[cells.pop(), cells.pop(), cells.pop(), cells.pop()]}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {rows}
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
    justifyContent: 'center'
  },
  rowStyles: {
    flexDirection: 'row',
    gap: 9,
    marginVertical: 5
  }
});
