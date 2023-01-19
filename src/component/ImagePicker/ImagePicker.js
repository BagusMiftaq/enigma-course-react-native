import Button from "../Button/Button";
import {Image, Text, View} from "react-native";
import styles from "./styles";

import {openCamera, showGallery} from "../../utils/imagePicker";

const ImagePicker=(props)=>{
    const onPress = props.type === "GALLERY"? showGallery : openCamera;

    return(
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <Button text={props.buttonText} onPress={()=> onPress(props.onChange)}/>
            {props.value && (
                <Image
                source={{uri: props.value}}
                style={styles.image}
                />
            )}
        </View>
    )
}

export default ImagePicker;