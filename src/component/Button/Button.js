import {Text, TouchableOpacity, View} from "react-native";
import styles from "./style";


const Button =(props)=>{
 return(
     <View style={styles.container}>
         <TouchableOpacity style={styles.button} onPress={props.onPress}>
             <Text style={styles.buttonText}>
                 {props.text}
             </Text>
         </TouchableOpacity>
     </View>
 )
}

export default Button;