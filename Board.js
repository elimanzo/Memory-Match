import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Row from './Row';

const COLCOUNT = 4;

export default function Board({ board, dispatch, revealed, guessIndexes }) {
  const rows = [];
  const rowsLength = Math.ceil(board.length / COLCOUNT);

  for (let i = 0; i < rowsLength; i++) {
    const index = i * COLCOUNT;
    rows.push(
      <Row
        key={i}
        symbols={board.slice(index, index + COLCOUNT)}
        rowIndex={i}
        dispatch={dispatch}
        revealed={revealed}
        guessIndexes={guessIndexes}
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
