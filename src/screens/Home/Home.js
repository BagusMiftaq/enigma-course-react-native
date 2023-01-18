import {View} from "react-native";

import Button from "../../component/Button/Button";
import ContactList from "../List/ContactList";
import styles from "./styles";

const Home =(props)=>{
    console.log(props);

    const onNavigate=()=>{
        props.navigation.navigate("Feed")
    }

    return(
        <View style={styles.container}>
            <Button onPress={onNavigate} text={"Go to Feed"}/>
            <ContactList/>
        </View>
    )
}

export default Home;
