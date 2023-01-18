import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {Registration} from "./src/screens/Registration";
import {CourseList} from "./src/screens/List";
import ContactList from "./src/screens/List/ContactList";
import Settings from "./src/screens/Settings/Settings";
import Feed from "./src/screens/Feed/Feed";
import Detail from "./src/screens/Detail/Detail";
import Home from "./src/screens/Home/Home";

import MainNavigation from "./src/navigation/MainNavigation";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"light-content"}/>
      <MainNavigation/>

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
