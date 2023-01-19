import {StyleSheet} from "react-native";

export default StyleSheet.create({
   container:{
       flex:1,
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "#f693fc"
   },
    formContainer:{
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
    title:{
       color:"#A828AE",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginTop:20
    },
});