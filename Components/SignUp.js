import React, { useState } from "react";
import {
    SafeAreaView,
    TextInput,
    StyleSheet,
    View,
    Button,
    Text,
    TouchableOpacity,
} from "react-native";

const SignUp = ({ navigation }) => {

    const [name, onChangeName] = useState(null);
    const [email, onChangeEmail] = useState(null);
    const [password, onChangePassword] = useState(null);
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [emailValid, setEmailValid] = useState('');
    const[passwordValid,setPasswordValid] = useState('');


    ValidEmail = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (text.length === 0) {
            setEmailValid('')
        }

        else if (reg.test(text) === true) {
            setEmailValid('');
        }
        else {
            setEmailValid('Enter Valid Email');
        }
    }

    ValidPassword = (text) => {
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,16}$/;

        if (text.length === 0) {
            setPasswordValid('')
        }

        else if (reg.test(text) === true) {
            setPasswordValid('');
        }
        else {
            setPasswordValid('Enter Valid Password');
        }
    }


    return (
        <SafeAreaView>

            <View style={styles.appView}>
                <Text style={styles.appViewTitle}>
                    Todo App
                </Text>
            </View>

            <View style={styles.formContainer}>

                <View style={styles.form}>

                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            Sign Up
                        </Text>
                    </View>

                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="Your Name"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            onChangeEmail(value)
                            ValidEmail(value)
                        }}
                        value={email}
                        placeholder="Your Email"
                    />
                    {emailValid ? <Text style={styles.validText}>{emailValid}</Text>: null}
                    <TextInput
                        style={styles.input}
                        onChangeText={(value) => {
                            onChangePassword(value)
                            ValidPassword(value)
                        }}
                        value={password}
                        placeholder="Your Password"
                        secureTextEntry={passwordVisibility}
                    />
                    {passwordValid ? <Text style={styles.validText}>{passwordValid}</Text>: null}

                    <View style={styles.button}>
                        <TouchableOpacity style={styles.buttonIn}>
                            <Text style={styles.buttonInText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.viewLink}>
                        <Text style={styles.viewTextLink}>
                            Already have Accout ? 
                            <Text
                                style={{ color: 'blue' }}
                                onPress={() =>
                                    navigation.navigate('Sign In')}
                            >Log In</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        // borderBottomWidth:.5,
        // borderBottomColor:"#000000",
    },
    titleText: {
        fontFamily: "Cochin",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20

    },
    title: {
        alignItems: "center",
    },
    buttonIn: {


        alignItems: "center",
        backgroundColor: "#98447e",
        padding: 10,
        width: 300,
        display: "flex",
        borderRadius: 20

    },
    button: {
        marginTop: 30,
        alignItems: "center",
        display: "flex",
        marginBottom: 20,

    },
    buttonInText: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "600",

    },
    formContainer: {
        backgroundColor: "#ffffff",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        borderColor: "#000000",
        marginTop: 100,
        height: '100%'
    },
    appView: {
        alignItems: "center",
    },
    appViewTitle: {
        alignItems: "center",
        display: "flex",
        fontFamily: "Cochin",
        fontSize: 30,
        fontWeight: "800",
        fontcolor: "000000",
    },
    viewLink:{
        alignItems: "center",
    },
    validEmail: {
        alignItems: "center",
    },
    validText:{
        color:'#e55937',
    },

});

export default SignUp;