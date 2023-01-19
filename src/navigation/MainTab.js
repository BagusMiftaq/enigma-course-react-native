import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "../component/Icon/Icon";

import Home from "../screens/Home/Home";
import Settings from "../screens/Settings/Settings";
import Feed from "../screens/Feed/Feed";
import HomeStack from "./HomeStack";
import {Text} from "react-native";
import CourseStack from "./CourseStack";
import {CourseList} from "../screens/CourseList";
import AddCourse from "../screens/AddCourse/AddCourse";
import ContactList from "../screens/List/ContactList";

const Tabs = createBottomTabNavigator();

const MainTab = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name={"Contact"}
                component={ContactList}
            options={{
                tabBarLabel:()=>null,
                tabBarIcon: ({focused})=><Icon name="planet" focused={focused}></Icon>
            }}/>
            <Tabs.Screen
                name={"Course List"}
                component={CourseList}
                options={{
                    tabBarLabel:()=>null,
                    tabBarIcon: ({focused})=><Icon name="newspaper" focused={focused}></Icon>,
                }}/>
            <Tabs.Screen
                name={"Add Course"}
                component={AddCourse}
                options={{
                    tabBarLabel:()=>null,
                    tabBarIcon: ({focused})=><Icon name="hammer" focused={focused}></Icon>,
                    headerShown: false
                }}/>
        </Tabs.Navigator>
    )
}

export default MainTab;