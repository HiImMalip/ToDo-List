/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
 } from 'react-native';
 
 
 import AddView from './components/AddView';
 import TaskFlatList from './components/TaskFlatList';
 
 const App = () => {
   const [data, setData] = useState([
     { title: 'Go to the office', isFinished: false },
     { title: 'Prepare tasks for today', isFinished: false },
     { title: 'Team meeting', isFinished: false },
     { title: 'Commit tasks changed', isFinished: false },
   ])
 
 
   onAddNewTask = (taskName) => {
     const newTask = { title: taskName, isFinished: false }
     const newTaskList = [...data, newTask]
 
     setData(newTaskList);
   }
 
   const onIsFinished = (name) => {
     setData(data.map(eachItem => {
       if (name == eachItem.title) {
         return {
           ...eachItem,
           isFinished: eachItem.isFinished === true ? false : true
         }
       } else return eachItem
     }))
   }
 
 
 
   const onDelete = (index) => {
     setData(data.filter((item, i) => {
       if (i != index)
          return item
     }))
   }
   return (
     <SafeAreaView style={styles.container}>
       <AddView onAddNewTask={onAddNewTask} />
       <TaskFlatList
         data={data}
         onFinishedItem={onIsFinished}
         onDeleteItem={onDelete} />
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#E1F5FE'
   }
 });
 
 export default App;
 