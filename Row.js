import { View, StyleSheet } from 'react-native';

import Card from './Card';

export default function Row(props) {
  return (
    <View style={styles.container}>
      {props.symbols.map((symbol) => (
        <Card symbol={symbol} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 6,
    gap: 12
  }
});
