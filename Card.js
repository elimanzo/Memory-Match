import { View, Text, StyleSheet } from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardText}>{props.symbol}</Text>
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
    borderRadius: 10
  },
  cardText: {
    fontSize: 40
  }
});
