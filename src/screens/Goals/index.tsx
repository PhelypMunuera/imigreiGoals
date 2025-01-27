import { StyleSheet, Text, View } from 'react-native';

export function Goals() {
  return (
    <View style={styles.container}>
      <Text>Metas!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
