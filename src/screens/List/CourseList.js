import {FlatList, Text, View, StyleSheet, Button, TouchableOpacity, Image, SectionList} from "react-native";

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

const CourseList = () => {

    return (
        <>
            <FlatList
                style={{backgroundColor: "lightgreen"}}
                initialNumToRender={5}
                data={data}
                renderItem={rendererCourse}
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