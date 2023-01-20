import {Text, View} from "react-native";
import styles from "./styles";
import {removeToken} from "../../utils/token";
import Button from "../../component/Button/Button";

const Settings =(props)=>{

    const onLogout = async ()=>{
        await removeToken();
        props.navigation.navigate("Auth")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Settings Screen</Text>
            <Button onPress={onLogout} text={"Logout"}/>
        </View>
    )
}

export default Settings;