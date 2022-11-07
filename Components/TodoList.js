import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    AsyncStorage,
    FlatList,
    Image
} from "react-native";
import { queryAllTodosStatusFalse, queryAllTodosStatusTrue, updateTodos } from "./Schema/Index";
// import Todo from "./Todo";




const TodoList = ({ navigation, route }) => {

    const [todos, setTodos] = useState([]);
    const [pending, setPending] = useState(true);
    const { email } = route.params;

    const getTodo = async () => {
        if (pending === true) {
            setTodos(await queryAllTodosStatusFalse());
        }
        else {
            setTodos(await queryAllTodosStatusTrue())
        }

    }

    useEffect(() => {

        getTodo();

    }, [])

    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );

      const Todo = ({ todo }) => {

        return (
            <TouchableOpacity style={styles.todoContainer}
            onPress={() => {
                updateTodos(todo);
                console.log(todo);
                getTodo()
            }}
            >
    
                {
                    todo.category === 'Working' ?
                        <Image
                            style={styles.todoImage}
                            source={{
                                uri: 'https://thumbs.dreamstime.com/b/people-icon-trendy-flat-style-grey-background-crowd-sign-persons-symbol-your-web-site-design-logo-app-ui-vector-113699339.jpg',
                            }}
                        /> :
                        <Image
                            style={styles.todoImage}
                            source={{
                                uri: 'https://cdn1.vectorstock.com/i/1000x1000/99/95/grey-house-sign-icon-vector-5059995.jpg',
                            }}
                        />
                }
                <View style={styles.todoInfo}>
                    <Text style={styles.todoInfoText}>{todo.body}</Text>
                    <Text>{todo.expiry}</Text>
                </View>
            </TouchableOpacity>
        );
    };


    const renderItem = ({ item }) => (
        <Todo todo={item} />
      );

    return (

        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.header}>

                <Text style={styles.headerUsernameText}>{email}</Text>

                <TouchableOpacity style={styles.headerAddButton}
                    onPress={() => {
                        navigation.navigate('AddTodo', { email })
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

            <View style={styles.list}>
                <View style={{ alignItems: "center", width: "100%" }}>
                    <View style={styles.listSorting}>

                        <TouchableOpacity style={styles.listSortingButton}
                            onPress={() => {
                                setPending(true)
                                getTodo();
                            }}
                        >
                            <Text style={styles.listSortingButtonText}>Pending</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.listSortingButton}
                            onPress={() => {
                                setPending(false)
                                getTodo();
                            }}
                        >
                            <Text style={styles.listSortingButtonText}>Completed</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <FlatList style={styles.listcontainer}
                    data={todos}
                    renderItem={renderItem}
                    keyExtractor={item => item.body}
                />
            </View>



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
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        // alignItems:"center",
    },
    listSorting: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        // marginTop: -40,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        width: "80%",
        marginBottom: 20,
        borderRadius: 20,
    },
    listSortingButton: {
        paddingHorizontal: 40,
        fontSize: 22,
        fontWeight: "600",
    },
    listcontainer: {

        borderColor: "#000000",
        flex: 1,
        width: "100%",
        // justifyContent: "space-evenly",
        backgroundColor: "#edeff2",
        // alignItems: "center",
        // marginTop: -30,
    },

    noTodo: {
        fontSize: 15,
        fontWeight: "bold",
    },
    todoContainer: {
        display: "flex",
        margin: 10,
        width: "95%",
        marginTop: 4,
        flexDirection: "row",
        borderRadius: 10,
        flex: 1,
    },
    todoImage: {
        width: 70,
        height: 90,
        paddingRight: 5,
        resizeMode: 'contain',
        backgroundColor: '#f2f2f2',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    todoInfo: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "#ffffff",
        paddingLeft: 10,
    },
    todoInfoText: {
        margin: 10,
        fontSize: 15,
        fontWeight: "300"
    }
});

export default TodoList;