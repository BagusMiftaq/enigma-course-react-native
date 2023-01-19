import * as ImagePicker from "expo-image-picker";

export const showGallery = async(onSetImageUri)=>{
    const result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled){
        onSetImageUri(result.uri);
    }
}

export const openCamera = async(onSetImageUri)=>{
    const result = await ImagePicker.launchCameraAsync();

    if (!result.canceled){
        onSetImageUri(result.uri);
    }
}