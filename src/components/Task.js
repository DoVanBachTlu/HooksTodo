import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
const Task = (props) => (
    <View style={styles.taskWrapper}>
        <View  style={{flexDirection: 'row', marginRight: 220}}>
        {/* <TouchableOpacity onPress={() => props.setChecked()}>
            <Icon
                name={props.checked ? "check" : "square"}
                size={30}
                color="#900"
                style={{ marginLeft: 15 }}
            />
        </TouchableOpacity> */}

        <View>
            {props.checked && <View style={styles.verticalLine}></View>}
            <Text style={styles.task}>{props.contentTodo}</Text>
        </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 20,}}>
        <Icon
            name="edit"
            size={30}
            color="black"
            onPress={props.editTodo}
        />
        <Icon
            name="trash-2"
            size={30}
            color="black"
            style={{marginLeft: 10}}
            onPress={props.deleteTodo}
        />
        </View>
    </View>
)

export default Task

const styles = StyleSheet.create({
    taskWrapper: {
        marginTop: '5%',
        flexDirection: 'row',
        borderColor: 'black',
        borderBottomWidth: 1.5,
        alignItems: 'center',
        minHeight: 40,
        flex:1,
        justifyContent: 'space-between',
    },
    task: {
        paddingBottom: 20,
        paddingLeft: 10,
        marginTop: 6,
        borderColor: 'white',
        borderBottomWidth: 1,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black',
    },
    verticalLine: {
        borderBottomColor: 'black',
        borderBottomWidth: 4,
        marginLeft: 10,
        width: '100%',
        position: 'absolute',
        marginTop: 15
    }
})