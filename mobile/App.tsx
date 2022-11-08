import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Button title="Send 1" />
      <Button title="Send 1" />
      <Button title="Send 1" />
      <Button title="Send 1" />
      <StatusBar style="auto" />
    </View>
  );
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    color: '#000',
    fontSize: 22
  },
});
