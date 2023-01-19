import useAddCourse from "./useAddCourse";
import {Alert, KeyboardAvoidingView, Platform, ScrollView, Text, View} from "react-native";
import styles from "./styles";
import Button from "../../component/Button/Button";
import ButtonCancel from "../../component/ButtonCancel/ButtonCancel";
import FormInput from "../../component/FormInput/FormInput";
import {useNavigation} from "@react-navigation/native";
import ImagePicker from "../../component/ImagePicker/ImagePicker";

const FORM_LIST = [
    {id: "title", label: "Title", type: "default", placeholder: "Enter course title"},
    {id: "description", label: "Description", type: "default", placeholder: "Enter course description"},
    {id: "courseType", label: "Course Type", type: "default", placeholder: "Choose course material"},
    {id: "duration", label: "Duration", type: "default", placeholder: "Enter course duration"},
    {id: "level", label: "Level", type: "default", placeholder: "Enter course level"},
]

const AddCourse = ({navigation}) => {
    const {getter, setter} = useAddCourse();

    const onPress = () =>{
        Alert.alert("Course has been added")
        navigation.navigate("Course List")

    }


    const onCancel=()=>{
        navigation.navigate("Course List");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>Add Course</Text>
            <ScrollView style={styles.formContainer}>
                {FORM_LIST.map(item=>(
                    <FormInput
                        label={item.label}
                        placeholder={item.placeholder}
                        value={getter[item.id]}
                        onChange={setter[item.id]}
                        type={item.type}
                    />
                ))}
                <ImagePicker
                    type={"GALLERY"}
                    label={"Course File"}
                    buttonText={"Add an Image"}
                    value={getter.courseFile}
                    onChange={setter.courseFile}
                />
            </ScrollView>
            <View style={styles.buttonWrapper}>
                <Button text={"Submit"} onPress={onPress} disable={false}/>
                <ButtonCancel text={"Cancel"} onPress={onCancel}/>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AddCourse;