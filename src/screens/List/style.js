import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    appbar: {
        height: 50,
        justifyContent: "space-between",
        flexDirection: "row",
        margin: 10

    },
    apptitle: {
        fontSize: 40,
        fontWeight: "bold",
    },
    phonebook: {
        overflow:"hidden",
        // borderWidth: 0.5,
        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
    },
    info: {
        margin: 10,

    },
    picture: (bgColor)=>({
        height: 60,
        width: 60,
        marginRight: 10,
        borderRadius: 50,
        backgroundColor: bgColor,
    }),
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    number: {
        fontSize: 14,
        color: "grey"
    },
})

export default styles;