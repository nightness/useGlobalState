import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import AppChild from './AppChild';
import { useGlobalState } from './useGlobalState';

export default function App() {

  const [count, setCount] = useGlobalState('count', 0);

  return (
    <View style={styles.container}>
      <Text>Current value: { count }</Text>
      <StatusBar style="auto" />
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Button title="Decrement" onPress={() => setCount(count - 1)} />
      <AppChild />
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
