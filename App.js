import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'make-a-guess':
      return { ...state, guesses: state.guesses + 1 };
    case 'reset-guess':
      return state;
    case 'reset-game':
      return state;
  }
  return state;
}

function getInitialState() {
  return {
    board: ['a', 'b', 'c', 'a', 'b', 'c'],
    revealed: [],
    guesses: 0
  };
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);
  return (
    <View style={styles.container}>
      <Button
        title='Guess'
        onPress={() => dispatch({ type: 'make-a-guess' })}
      />
      <Text>{JSON.stringify(state, null, 2)}</Text>
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
  }
});
