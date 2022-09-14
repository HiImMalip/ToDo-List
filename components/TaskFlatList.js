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

function TaskFlatList(props) {
    const { data, onFinishedItem, onDeleteItem } = props
    return <FlatList
        data={data}
        extraData={props}
        keyExtractor={item => item.title}
        renderItem={({item, index}) => {
            return <View style={styles.container}>
            <TouchableOpacity style={{
                marginTop: -2
            }}

                onPress={() => onFinishedItem(item.title)}>
                <Text> {(item.isFinished) ? `✅` : `🕘`} </Text>
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <Text style={{
                    color: 'black'
                }}>{item.title}</Text>
            </View>
            <TouchableOpacity style={{ marginTop: -2 }} onPress={() => onDeleteItem(index)}>
                <Text>{`❌`}</Text>
            </TouchableOpacity>
        </View>
        }}
    />
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        borderColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowColor: 'gray',
        elevation: 2
    }
})

export default TaskFlatList