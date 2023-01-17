import datapack from "../../fixture/dummyUser.json";
import {Image, LayoutAnimation, SectionList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import getRandomColor from "../../utils/color";
import {groupingAlphabet} from "../../utils/collection";
import React, {useState} from "react";
import styles from "./style";

const contact = [...datapack];

const RenderImage = React.memo((props) => (
    <View>
        <Image
            style={{...styles.picture, backgroundColor: `${getRandomColor()}`,}
            }
            source={{uri: props.image}}/>
    </View>
))

const renderprofile = (data) => {
    const [pressing, setPress] = useState(false);

    const presInfo = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        setPress(!pressing);
    }

    return (
        <TouchableOpacity onPress={presInfo}>
            <View style={styles.phonebook}>
                    <RenderImage image={data.image}/>
                <View>
                    <Text style={styles.name}>{data.firstName} {data.lastName}</Text>
                    <Text style={styles.number}>{data.phone}</Text>
                </View>
            </View>
            {pressing === true && (
                <View style={{marginLeft:90, marginBottom:10}}>
                    <Text style={{...styles.number, fontWeight:"bold", color:"black"}}>Email</Text>
                    <Text style={styles.number}>{data.email}</Text>
                    <Text style={{...styles.number, fontWeight:"bold", color:"black"}}>Address</Text>
                    <Text style={styles.number}>{data.address.address}</Text>
                    <Text style={{...styles.number, fontWeight:"bold", color:"black"}}>Age</Text>
                    <Text style={styles.number}>{data.age}</Text>
                </View>)}
        </TouchableOpacity>
    )
}

const renderHeader = (item) => (
    <View style={{backgroundColor: "whitesmoke", paddingHorizontal: 20, paddingVertical: 5}}>
        <Text>{item.title}</Text>
    </View>
)

const ContactList = () => {
    return (
        <>
            <View style={styles.appbar}>
                <Text style={styles.apptitle}>Contact</Text>
            </View>
            <SectionList
                initialNumToRender={5}
                sections={groupingAlphabet(contact, "firstName")}
                renderItem={(data) => renderprofile(data.item)}
                renderSectionHeader={(data) => renderHeader(data.section)}
                keyExtractor={(data) => data.id}
                stickySectionHeadersEnabled
            />
        </>
    )
}

export default ContactList;