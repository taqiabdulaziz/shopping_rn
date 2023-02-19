import { View, StyleSheet, Text } from "react-native"
import { Appbar, TextInput, Button } from 'react-native-paper';
import TodoItemInput from "../../components/TodoItemInput/TodoItemInput";
import { useState } from "react";
import { useTodosStore } from "../../stores/todoStores";

const AddTodoScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: 'adwadw'
    }
  ])
  const [title, setTitle] = useState()
  const addTodos = useTodosStore(state => state.addTodos)

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {
          navigation.navigate("Home")
        }} />
        <Appbar.Content title="Add Todo" />
        <Appbar.Action icon="check-bold" onPress={() => {
          addTodos({
            title: title,
            todos: todos
          })
          navigation.navigate('Home')
        }} />
      </Appbar.Header>
      <View style={styles.body}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          mode="outlined"
          label="Title"
          placeholder="Groceries"
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.todoItemInput}>
          <Text style={styles.title}>Todo</Text>
          {
            todos.map((todo, i) => {
              const onTextChange = (text) => {
                todos[i].title = text
                setTodos(todos)
              }

              const onDelete = () => {
                setTodos(todos.filter((todo, index) => index != i))
              }
              return <TodoItemInput key={i} onTextChange={onTextChange} onPressDelete={onDelete} />
            })
          }
        </View>
        <View style={styles.button}>
          <Button mode="contained" onPress={() => {
            const todo = {
              id: todos.length,
              title: ''
            }

            setTodos([...todos, todo])
          }}>
            Add
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffbfe',
    height: '100%',
  },
  body: {
    padding: 15
  },
  todoItemInput: {
    marginTop: 25
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  button: {
    marginTop: 25
  }
})

export default AddTodoScreen;