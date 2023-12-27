import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({ symbol, dispatch, index, revealed }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => dispatch({ type: 'make-a-guess', index })}
      >
        <Text style={styles.text}>{revealed.includes(symbol) && symbol}</Text>
      </TouchableOpacity>
    </View>
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
