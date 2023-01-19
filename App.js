import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {Registration} from "./src/screens/Registration";
import ContactList from "./src/screens/List/ContactList";
import Settings from "./src/screens/Settings/Settings";
import Feed from "./src/screens/Feed/Feed";
import Detail from "./src/screens/Detail/Detail";
import Home from "./src/screens/Home/Home";

import RootNavigation from "./src/navigation/RootNavigation";
import Login from "./src/screens/Login/Login";
import {CourseList} from "./src/screens/CourseList";
import AddCourse from "./src/screens/AddCourse/AddCourse";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"}/>
        <RootNavigation/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
