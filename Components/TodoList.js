import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    AsyncStorage
} from "react-native";
import Todo from "./Todo";




const TodoList = ({ navigation, route }) => {

    const [todos, setTodos] = useState([]);
    const { email } = route.params;

    const getTodo = async () => {
        const temp = await AsyncStorage.getItem(email)
        if (temp != null) {
            userData = JSON.parse(temp);
        } else {
            userData = []
        }
        setTodos(userData);

    }

    useEffect(() => {

        getTodo();

    }, [todos])
    // console.log("todo list",todo)
    return (

        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.header}>

                <Text style={styles.headerUsernameText}>{email}</Text>

                <TouchableOpacity style={styles.headerAddButton}
                    onPress={() => {
                        navigation.navigate('AddTodo',{email})
                    }}
                >
                    <Text style={styles.headerAddButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            <SafeAreaView style={styles.bodyContainer} >

                <View style={styles.bodyView}>
                    <Text style={styles.bodyViewTitleText}>
                        Todo App
                    </Text>
                </View>
            </SafeAreaView>

            <ScrollView style={styles.list}>
                <View style={styles.listcontainer}>

                    <View style={styles.listSorting}>

                    </View>

                    {todos.length > 0 ? todos.map((todo) => {
                        return (
                            <Todo
                                todo={todo} />
                        )
                    }) :
                        <View style={styles.mainContainer}>
                            <Text style={styles.noTodo}>No todo Right Now</Text>
                        </View>
                    }
                </View>
            </ScrollView>



        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        flex: 1,
    },
    header: {
        alignItems: "center",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: 60,
        backgroundColor: "#2246a9",
    },
    headerUsernameText: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingStart: 40,
        color: "#fff",
        fontSize: 20,
        fontWeight: "500",
    },
    headerAddButton: {
        height: 60,
        width: 60,
        marginRight: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    headerAddButtonText: {

        color: "#fff",
        fontSize: 40,
        fontWeight: "300",

    },
    bodyContainer: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#224",
        width: "100%",
    },
    bodyView: {
        alignItems: "center",
        height: 120,
        width: "100%",
    },
    bodyViewTitleText: {
        fontFamily: "Cochin",
        fontSize: 30,
        fontWeight: "800",
        color: "#fff",
    },
    list: {
        flex: 1,
        width: "100%",
        marginTop: -30,

    },
    listcontainer: {
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        borderColor: "#000000",
        flex: 1,
        width: "100%",
        justifyContent: "space-evenly",
        backgroundColor: "#edeff2",
    },
    listSorting: {
        height: 30,
    },
    noTodo:{
        fontSize:15,
        fontWeight:"bold",
    }
});

export default TodoList;