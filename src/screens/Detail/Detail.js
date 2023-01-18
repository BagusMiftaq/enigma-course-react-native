import {Image, Text, View, StyleSheet} from "react-native";
import styles from "./styles";
import getRandomColor from "../../utils/color";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const RenderImage = React.memo((props) => (
    <View>
        <Image
            style={styles.picture(getRandomColor())}
            source={{uri: props.image}}/>
    </View>
))

const Detail =(props)=>{
    const {route:{params:{contact}}} = props;
    return(
        <View style={styles.container}>
            <View style={styles.containerContact}>
                <View style={styles.containerProfile}>
                    <RenderImage image={contact.image}/>
                    <Text style={styles.textName}>{contact.firstName} {contact.lastName}</Text>
                    <Text style={styles.textInfo}>{contact.university}</Text>
                </View>
                <View style={styles.infoWrapper}>
                    <View style={styles.infoDetailWrapper}>
                        <Ionicons name={"call"} size={24} color={"#A828AE"}/>
                        <View>
                            <Text style={{marginLeft:20, fontSize:12, fontWeight:"bold", color:"#A828AE"}}>NUMBER</Text>
                            <Text style={styles.text}>{contact.phone}</Text>
                        </View>
                    </View>
                    <View style={styles.infoDetailWrapper}>
                        <Ionicons name={"mail"} size={24} color={"#A828AE"}/>
                        <View>
                            <Text style={{marginLeft:20, fontSize:12, fontWeight:"bold", color:"#A828AE"}}>EMAIL</Text>
                            <Text style={styles.text}>{contact.email}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerContact}>
                <View style={styles.infoWrapper}>
                    <View style={styles.infoDetailExtra}>
                        <Ionicons name={"location"} size={24} color={"#A828AE"}/>
                        <View>
                            <Text style={{marginLeft:20, fontSize:12, fontWeight:"bold", color:"#A828AE"}}>ADDRESS</Text>
                            <Text style={styles.text}>{contact.address.address}, {contact.address.city}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerContact}>
                <View style={styles.infoWrapper}>
                    <View style={styles.infoDetailExtra}>
                        <Ionicons name={"podium"} size={24} color={"#A828AE"}/>
                        <View>
                            <Text style={{marginLeft:20, fontSize:12, fontWeight:"bold", color:"#A828AE"}}>COMPANY</Text>
                            <Text style={styles.text}>{contact.company.name}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Detail;