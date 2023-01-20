import useAddCourse from "./useAddCourse";
import {Alert, KeyboardAvoidingView, Platform, ScrollView, Text, View} from "react-native";
import styles from "./styles";
import Button from "../../component/Button/Button";
import ButtonCancel from "../../component/ButtonCancel/ButtonCancel";
import FormInput from "../../component/FormInput/FormInput";
import ImagePicker from "../../component/ImagePicker/ImagePicker";
import useFetchMutation from "../../hooks/useFetchMutation";
import {addCourse} from "../../service/courseApi";
import {isIos} from "../../utils/isIos";
import useFetchQuery from "../../hooks/useFetchQuery";
import {getCourseType} from "../../service/courseTypeApi";

const FORM_LIST = [
    {id: "title", label: "Title", type: "default", placeholder: "Enter course title"},
    {id: "description", label: "Description", type: "default", placeholder: "Enter course description"},
    {id: "courseTypeId", label: "Course Type", type: "default", placeholder: "Choose course type"},
    {id: "duration", label: "Duration", type: "default", placeholder: "Enter course duration"},
    {id: "level", label: "Level", type: "default", placeholder: "Enter course level"},
]

const AddCourse = (props) => {
    const {getter, setter} = useAddCourse();
    const {data: courseTypeData} = useFetchQuery(getCourseType);
    const {fetchMutation, loading} = useFetchMutation(addCourse, ()=> props.navigation.navigate("Course List"));

    console.log("prips", props)

    const submitHandler = () =>{
        const courseFilePathArr = getter.courseFile?.split("/");
        const courseFileName = courseFilePathArr[courseFilePathArr.length-1];
        const payload = new FormData();

        payload.append("title", getter.title);
        payload.append("description", getter.description);
        payload.append("file", {
            uri: getter.courseFile,
            type: "image/jpeg",
            name: courseFileName,
        })
        payload.append("courseTypeId", getter.courseTypeId);
        payload.append("duration", getter.duration);
        payload.append("level", getter.level);

        console.log("payload", payload)

        fetchMutation(payload);
    }

    const onCancel=()=>{
        props.navigation.navigate("Course List");
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
                <Button text={"Submit"} onPress={submitHandler} disable={false}/>
                <ButtonCancel text={"Cancel"} onPress={onCancel}/>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AddCourse;