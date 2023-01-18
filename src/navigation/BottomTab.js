import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "../component/Icon/Icon";

import Home from "../screens/Home/Home";
import Settings from "../screens/Settings/Settings";
import Feed from "../screens/Feed/Feed";
import HomeStack from "./HomeStack";
import {Text} from "react-native";

const Tabs = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tabs.Navigator
            // screenOptions={({ route }) => ({
            //     tabBarIcon: ({ focused, color, size }) => {
            //         let iconName;
            //
            //         if (route.name === 'Home') {
            //             iconName = focused
            //                 ? 'ios-home'
            //                 : 'ios-home-outline';
            //         } else if (route.name === 'Settings') {
            //             iconName = focused ? 'ios-list' : 'ios-list-outline';
            //         } else {
            //             iconName = focused ? 'archive' : 'archive-outline';
            //         }
            //
            //         // You can return any component that you like here!
            //         return <Ionicons name={iconName} size={size} color={color} />;
            //     },
            //     tabBarActiveTintColor: 'lightgreen',
            //     tabBarInactiveTintColor: 'gray',
            // })}
            >
            <Tabs.Screen
                name={"Home Stack"}
                component={HomeStack}
            options={{
                tabBarLabel:()=>null,
                tabBarIcon: ({focused})=><Icon name="planet" focused={focused}></Icon>,
                headerShown: false
            }}/>
            <Tabs.Screen
                name={"Feed"}
                component={Feed}
                options={{
                    tabBarLabel:()=>null,
                    tabBarIcon: ({focused})=><Icon name="newspaper" focused={focused}></Icon>,
                }}/>
            <Tabs.Screen
                name={"Settings"}
                component={Settings}
                options={{
                    tabBarLabel:()=>null,
                    tabBarIcon: ({focused})=><Icon name="hammer" focused={focused}></Icon>,
                }}/>
        </Tabs.Navigator>
    )
}

export default BottomTab;