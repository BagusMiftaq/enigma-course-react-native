import {KeyboardAvoidingView, Platform, Text, View} from "react-native";
import FormInput from "../../component/FormInput/FormInput";
import {useState} from "react";
import Button from "../../component/Button/Button";
import styles from "./styles";
import {validateEmail} from "../../utils/validate";
import useFetchMutation from "../../hooks/useFetchMutation";
import {login} from "../../service/authApi";
import {saveToken} from "../../utils/token";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        email: false
    })

    const onSuccess = (token) => {
        if (token) {
            saveToken(token);
            props.navigation.navigate("Main");
        } else {
            alert("Login failed, try again")
        }
    }

    const {fetchMutation, loading} = useFetchMutation(
        login,
        onSuccess
    );


    const emailHandler = (value) => {
        const isValid = validateEmail(value);
        setEmail(value);

        setError((prevState) => ({
            ...prevState, email: !isValid
        }));
    }

    const onSubmit = () => {
        fetchMutation({email, password})
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Login</Text>
                <FormInput
                    label={"Email"}
                    placeholder={"Enter your Email"}
                    value={email}
                    onChange={emailHandler}
                    type={"email-address"}
                />

                {error?.email && <Text>Not a valid email</Text>}

                <FormInput
                    label={"Password"}
                    placeholder={"Enter your Password"}
                    value={password}
                    onChange={setPassword}
                    isPassword={true}
                />
                <Button
                    text={"LOGIN"}
                    onPress={onSubmit}
                    disabled={!password || error.email || loading}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login;