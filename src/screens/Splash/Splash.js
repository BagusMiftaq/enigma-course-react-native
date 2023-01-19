import {useEffect, useState} from "react";
import {Text, View} from "react-native";
import styles from "./styles";

const Splash=(props)=>{
    const [isLoggedIn, setLoggedIn] = useState(false);

    const onNavigate=()=>{
        if (isLoggedIn){
            props.navigation.navigate("Main")
        } else {
            props.navigation.navigate("Auth")
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            onNavigate();
        }, 100)
    }, [])

    return(
        <View style={styles.container}>
            <Text>SPLASH</Text>
        </View>
    )
}

export default Splash;