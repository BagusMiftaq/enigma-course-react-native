import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

// import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from "../screens/Home/Home";
import Detail from "../screens/Detail/Detail";
import ContactList from "../screens/List/ContactList";

// const Stack= createNativeStackNavigator();

const Stack = createStackNavigator();

const HomeStack=()=>{
    return(
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen
                name={"Contact"}
                component={ContactList}/>
            <Stack.Screen
                name={"Detail"}
                component={Detail}
                options={({route})=>({title: route.params.contact.firstName.toLowerCase()+"."+route.params.contact.lastName.toLowerCase()})}/>
        </Stack.Navigator>
    )
}

export default HomeStack;