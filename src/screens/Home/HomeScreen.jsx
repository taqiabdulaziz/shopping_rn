import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import TodoItem from '../../components/TodoItem/TodoItem';
import { useTodosStore } from '../../stores/todoStores';

const HomeScreen = ({ navigation }) => {
  const todos = useTodosStore(state => state.todos)
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
        <Appbar.Action icon="plus" onPress={() => {
          navigation.navigate('AddTodo')
        }} />
      </Appbar.Header>
      <View style={styles.itemsContainer}>
        {
          todos.map(todo => (
            <View style={styles.todoItem}>
              <TodoItem todo={todo} />
            </View>
          ))
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffbfe',
    height: '100%'
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  itemsContainer: {
    margin: 15
  },
  todoItem: {
    marginTop: 15
  }
})

export default HomeScreen;