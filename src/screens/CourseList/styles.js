import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        marginHorizontal:10,
        marginVertical:10,
        padding: 40,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
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