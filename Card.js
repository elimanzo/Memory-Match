import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Card({ symbol }) {
  return (
    <View>
      <TouchableOpacity style={styles.cardContainer}>
        <Text style={styles.cardText}>{symbol}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 80,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 40,
  },
});
