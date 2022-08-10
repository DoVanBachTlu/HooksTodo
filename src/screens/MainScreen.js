import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Task from '../components/Task';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MainScreen = () => {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  handleAddTodo = () => {
    if (value.length > 0) {
      setTodos([...todos, { contentTodo: value, key: Date.now(), checked: false }])
      setValue('')
    }
  }

  handleDeleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.key !== id) return true
      })
    )
  }
  const handleDeleteAll = () => {
    Alert.alert('Confirm', 'Delete All?',[
      {
        text: 'Yes',
        onPress: () => setTodos([])
      },
      {
        text:'No',

      }
    ])
  }
  const editTodo = (id) => {
    todos.map((task) => console.log('aaaaaa',task.contentTodo))
    setValue(todos.map((task) => {
        if (task.key === id) value = task.contentTodo
      })
    )
  }
  handleChecked = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.key === id) todo.checked = !todo.checked;
        return todo;
      })
    )
  }
  useEffect(() => {
    console.log('todos', todos)
  })
  return (
      <View style={styles.container}>
        <Text style={{ marginTop: '10%', fontSize: 16, color: 'black' }}>List to do</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            multiline={true}
            onChangeText={(value) => setValue(value)}
            placeholder={'To do'}
            value={value}
          />
          <TouchableOpacity onPress={() => handleAddTodo()}>
            <Icon name="plus" size={30} color="black" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {
            todos.map((task) => (
                <Task
                  contentTodo={task.contentTodo}
                  key={task.key}
                  checked={task.checked}
                  setChecked={() => handleChecked(task.key)}
                  deleteTodo={() => handleDeleteTodo(task.key)}
                  editTodo={() => editTodo(task.key)}
                />          
            ))
          }
          {todos && todos?.length > 0 ?         
           <TouchableOpacity style={{alignSelf: 'center', marginTop: 20}} onPress={() => handleDeleteAll()}>
                  <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>Delete the all list</Text>
            </TouchableOpacity>
          : null}
        </ScrollView>
      </View>
  )
}
export default MainScreen
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%', 
    height: '100%', 
    flex: 1 ,
  },
  textInput: {
    height: 20,
    flex: 1,
    minHeight: '7%',
    marginTop: '5%',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 10,
  },
  taskWrapper: {
    marginTop: '5%',
    flexDirection: 'row',
    borderColor: '#D0D0D0',
    borderBottomWidth: 0.5,
    width: '100%',
    alignItems: 'stretch',
    minHeight: 40,
  },
  task: {
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 6,
    borderColor: 'black',
    borderBottomWidth: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgb(222,222,222)',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5,
  }
});