import Ionicons from "@expo/vector-icons/Ionicons";

const Icon =({name, focused})=> {
    let iconName = !focused ? name + "-outline" : name;
    return (
        <Ionicons name={iconName} size={24}
                  color={focused ? "#A828AE" : "black"}/>
    )
}

export default Icon;