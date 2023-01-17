import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Registration} from "./src/screens/Registration";
import {CourseList} from "./src/screens/List";
import ContactList from "./src/screens/List/ContactList";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
        <ContactList/>
      {/*<CourseList/>*/}
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
