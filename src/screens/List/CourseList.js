import {FlatList, Text, View, StyleSheet, Button, TouchableOpacity, Image} from "react-native";
import datapack from "../../fixture/dummyUser.json";
import {useState} from "react";

function getRandomColor() {
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}
const renderprofile = (data) => {
    return (
        <View style={styles.phonebook}>
            <TouchableOpacity style={{display: "flex", flexDirection: "row", alignItems: "center", flex: 1}}>
                <View>
                    <Image
                        style={{
                            ...styles.picture,
                            backgroundColor: `${getRandomColor()}`,
                        }}
                        source={{uri: data.item.image}}/>
                </View>
                <View>
                    <Text style={styles.title}>{data.item.firstName} {data.item.lastName}</Text>
                    <Text style={styles.desc}>{data.item.phone}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const CourseList = () => {
    const [sorter, setSort] = useState(true);


    const data = [
        {id: "1", title: "Course 1", description: "Ini description"},
        {id: "1", title: "Course 1", description: "Ini description"},
        {id: "1", title: "Course 1", description: "Ini description"},
        {id: "1", title: "Course 1", description: "Ini description"},
        {id: "1", title: "Course 1", description: "Ini description"},
        {id: "1", title: "Course 1", description: "Ini description"},
        {id: "1", title: "Course 1", description: "Ini description"},
        {id: "1", title: "Course 1", description: "Ini description"},
        {id: "1", title: "Course 1", description: "Ini description"},
        {id: "1", title: "Course 1", description: "Ini description"},
        {id: "1", title: "Course 1", description: "Ini description"},
        {id: "1", title: "Course 1", description: "Ini description"},


    ];

    const sorting=()=>{
        if(sorter){
            datapack.sort((a,b)=>{
                let da = a.firstName.toLowerCase(),
                    db = b.firstName.toLowerCase()

                if(da<db){
                    return -1
                }
                if(da>db){
                    return 1
                }
                return 0;
            })
        } else {
            datapack.sort((a,b)=>{
                let da = a.firstName.toLowerCase(),
                    db = b.firstName.toLowerCase()

                if(da>db){
                    return -1
                }
                if(da<db){
                    return 1
                }
                return 0;
            })
        }
        setSort(!sorter);
    }

    const rendererCourse = (data) => {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{data.item.title}</Text>
                    <Text style={styles.desc}>{data.item.description}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontWeight: "bold", color: "white", fontSize: 18}}>ADD</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <View style={styles.appbar}>
                <Text style={styles.apptitle}>Contact</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{fontWeight: "bold", color: "white", fontSize: 18}} onPress={sorting}>SORT</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                style={{backgroundColor: "lightgreen"}}
                initialNumToRender={5}
                data={datapack}
                renderItem={renderprofile}
                keyExtractor={(data, index) => index}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        backgroundColor: "yellow",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
    },
    appbar: {
        height: 50,
        justifyContent: "space-between",
        flexDirection: "row",
        margin: 10

    },
    apptitle:{
      fontSize:40,
      fontWeight:"bold",
    },
    phonebook: {
        borderWidth: 0.5,
        borderBottomColor: "lightgrey",
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
    },
    picture: {
        height: 60,
        width: 60,
        marginRight: 10,
        borderRadius: 50,
    },
    button: {
        width: 100,
        borderRadius: 10,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        height: 50
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    desc: {
        fontSize: 14,
        color: "grey"
    },
})
export default CourseList;