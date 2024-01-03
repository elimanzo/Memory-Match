import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({
  symbol,
  dispatch,
  index,
  revealed,
  guessIndexes,
}) {
  const Container =
    revealed.includes(symbol) || guessIndexes.includes(index)
      ? View
      : TouchableOpacity;
  const onPress = !(revealed.includes(symbol) || guessIndexes.includes(index))
    ? () => dispatch({ type: 'make-a-guess', index })
    : undefined;
  return (
    <Container style={styles.container} onPress={onPress}>
      {(revealed.includes(symbol) || guessIndexes.includes(index)) && (
        <Text style={styles.text}>{symbol}</Text>
      )}
    </Container>
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
