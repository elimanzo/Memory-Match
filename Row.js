import { View, StyleSheet } from 'react-native';

import Card from './Card';

export default function Row({
  symbols,
  dispatch,
  rowIndex,
  revealed,
  guessIndexes,
}) {
  return (
    <View style={styles.container}>
      {symbols.map((symbol, i) => (
        <Card
          key={i}
          symbol={symbol}
          dispatch={dispatch}
          index={rowIndex * symbols.length + i}
          revealed={revealed}
          guessIndexes={guessIndexes}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 6,
    gap: 12,
  },
});
