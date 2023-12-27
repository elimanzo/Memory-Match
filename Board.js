import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Row from './Row';

export default function Board({ board }) {
  const cells = [...board];
  const rows = [];
  while (cells.length > 0) {
    rows.push(
      <Row
        key={rows.length + 1}
        symbols={[cells.pop(), cells.pop(), cells.pop(), cells.pop()]}
      />,
    );
  }
  return <View style={styles.container}>{rows}</View>;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
