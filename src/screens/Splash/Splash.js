import {useEffect, useState} from "react";
import {Image, Text, View} from "react-native";
import styles from "./styles";
import splash from "../../../assets/splash_welcom.svg"
import {getToken} from "../../utils/token";

const Splash=(props)=>{
    const onNavigate= async ()=>{
        const token = await getToken();
        if (token){
            props.navigation.navigate("Main")
        } else {
            props.navigation.navigate("Auth")
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            onNavigate();
        }, 3000)
    }, [])

    return(
        <View style={styles.container}>
            <Image source={require('../../../assets/splash.png')} style={{height:200, width:200}}/>
        </View>
    )
}

export default Splash;