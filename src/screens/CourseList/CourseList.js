import {FlatList, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import styles from "./styles";
import courseList from "../../fixture/courseList.json"
import Button from "../../component/Button/Button";

const rendererCourse = (data) => {
    console.log(data)
    return (
        <TouchableOpacity activeOpacity={0.8} style={{overflow:"hidden"}}>
            <View style={styles.container}>
                    <Text style={styles.title}>{data.item.title}</Text>
                    <Text style={styles.desc}>{data.item.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const CourseList = () => {


    return (
        <>
            <FlatList
                style={{backgroundColor: "lightgreen"}}
                initialNumToRender={5}
                data={courseList.data}
                renderItem={rendererCourse}
                keyExtractor={(data, index) => index}
            />
        </>
    )
}
export default CourseList;