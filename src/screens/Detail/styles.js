import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        padding:20,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    containerContact: {
        margin:10,
        width: 350,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    containerProfile:{
        justifyContent: "center",
        alignItems: "center",
    },
    textName: {
        fontSize: 28,
        fontWeight: "bold"
    },
    textInfo: {
        fontSize: 14,
        fontWeight: "300",
        color:"#A828AE"
    },
    text: {
        flexWrap:"wrap",
        fontSize: 18,
        marginLeft: 20,
    },
    picture: (bgColor) => ({
        height: 80,
        width: 80,
        marginBottom: 20,
        borderRadius: 50,
        backgroundColor: bgColor,
    }),
    infoWrapper: {
        marginLeft:20,
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    infoDetailWrapper:{
        marginTop:30,
        alignItems:"center",
        flexDirection:"row",
    },
    infoDetailExtra:{
        alignItems:"center",
        flexDirection:"row",
    },
})