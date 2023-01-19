import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";

import {CourseList} from "../screens/CourseList";
import AddCourse from "../screens/AddCourse/AddCourse";

const Stack = createStackNavigator();

const CourseStack=()=>{
    return(
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen
                name={"Course List"}
                component={CourseList}/>
            <Stack.Screen
                name={"Add Course"}
                component={AddCourse}/>
        </Stack.Navigator>
    )
}

export default CourseStack;

