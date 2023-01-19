import {Text, TouchableOpacity, View} from "react-native";
import styles from "./style";


const ButtonCancel =(props)=>{
 return(
     <View style={styles.container}>
         <TouchableOpacity style={styles.button} onPress={props.onPress} disabled={props.disable}>
             <Text style={styles.buttonText}>
                 {props.text}
             </Text>
         </TouchableOpacity>
     </View>
 )
}

export default ButtonCancel;