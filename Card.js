import { View, Text } from 'react-native';

export default function Card(props) {
  return (
    <View
      style={{
        width: 60,
        aspectRatio: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
      }}
    >
      <Text
        style={{
          fontSize: 30
        }}
      >
        {props.symbol}
      </Text>
    </View>
  );
}
