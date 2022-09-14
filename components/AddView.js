import React, { useState } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Platform,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList,
    View
} from 'react-native';

function AddView(props) {
    const [task, setTask] = useState('')

    onAddNewTask = () => {
        props.onAddNewTask(task);
        setTask('')
    }


    return <View style={styles.addView}>
        <Text style={styles.title}>TO-DO LIST</Text>
        <View style={{ flexDirection: 'row' }} >
            <TextInput style={styles.inputText}
                placeholder='Task Add'
                value={`${task}`}
                onSubmitEditing={onAddNewTask}
                onChangeText={text => {
                    setTask(text)
                }}
                underlineColorAndroid="transparent"
            />
            <TouchableOpacity style={styles.button} onPress={this.onAddNewTask}>
                <Text style={{ color: 'white' }}>Add</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    addView: {
        height: 74,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowColor: 'gray',
        elevation: 2
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'rgb(0, 0, 0, 0.6)'
    },
    inputText: {
        height: 30,
        padding: 5,
        borderRadius: 5,
        borderColor: 'lightgray',
        borderWidth: 1,
        fontSize: 15,
        flex: 1,
        marginBottom: 10
    },
    button: {
        marginLeft: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#2196F3',
        padding: 7
    },
})
export default AddView