import React from "react";

import {
    StyleSheet,
    View,
    Text,
    Image,
} from "react-native";


const Todo = ({ todo }) => {

    return (
        <View style={styles.todoContainer}>

            {
                todo.status === 'Working' ?
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
                <Text>{todo.deadline}</Text>
            </View>
        </View>
    );


};

const styles = StyleSheet.create({
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
})


export default Todo;