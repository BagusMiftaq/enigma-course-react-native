import {NavigationContainer} from "@react-navigation/native";

import MainTab from "./MainTab";
import {createStackNavigator} from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import {TransitionPresets} from "@react-navigation/stack";
import Splash from "../screens/Splash/Splash";


const Stack = createStackNavigator();

const RootNavigation =()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS, headerShown: false}}>
                <Stack.Screen name={"Splash"} component={Splash}/>
                <Stack.Screen name={"Auth"} component={AuthStack}/>
                <Stack.Screen name={"Main"} component={MainTab}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;