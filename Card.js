import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({
  symbol,
  dispatch,
  index,
  revealed,
  guessIndexes,
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => dispatch({ type: 'make-a-guess', index })}
    >
      {(revealed.includes(symbol) || guessIndexes.includes(index)) && (
        <Text style={styles.text}>{symbol}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  text: {
    fontSize: 40,
  },
});
