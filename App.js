import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Registration} from "./src/screens/Registration";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <Registration/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
