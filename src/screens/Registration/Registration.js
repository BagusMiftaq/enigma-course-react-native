import {View, Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView, Platform} from "react-native";
import {useState} from "react";

import FormInput from "../../component/FormInput/FormInput";
import Button from "../../component/Button/Button";

const Registration = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite]= useState("");
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    return (

            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding":"height"}
            style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.formContainer}>
                    <Text style={styles.title}>REGISTRATION</Text>
                    <FormInput
                        label={"Name"}
                        placeholder={"Enter your Name"}
                        value={name}
                        onChange={setName}
                    />
                    <FormInput
                        label={"Address"}
                        placeholder={"Enter your Address"}
                        value={address}
                        onChange={setAddress}
                    />
                    <FormInput
                        label={"Phone Number"}
                        placeholder={"Enter your Phone Number"}
                        value={phone}
                        onChange={setPhone}
                        type={"phone-pad"}
                    />
                    <FormInput
                        label={"Website"}
                        placeholder={"Enter your Website URL"}
                        value={website}
                        onChange={setWebsite}
                        type={"url"}
                    />
                    <FormInput
                        label={"Email"}
                        placeholder={"Enter your Email"}
                        value={email}
                        onChange={setEmail}
                        type={"email-address"}
                    />
                    <FormInput
                        label={"Password"}
                        placeholder={"Enter your Password"}
                        value={password}
                        onChange={setPassword}
                        isPassword={true}
                    />
                    <FormInput
                        label={"Role"}
                        placeholder={"Enter your Role"}
                        value={role}
                        onChange={setRole}
                    />

                </ScrollView>
                <Button text={"Registration"} onPress={()=>{}}/>
            </KeyboardAvoidingView>

    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    formContainer:{
      paddingHorizontal:20,
      paddingTop:10,
    },
    title:{
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 50,
    },
})

export default Registration;