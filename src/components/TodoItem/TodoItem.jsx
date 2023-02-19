import { View, Text, StyleSheet } from 'react-native';
import { Card, Divider, RadioButton } from 'react-native-paper';

const TodoItem = ({ todo }) => {
  return (
    <View>
      <Card>
        <Card.Title title={todo.title} />
        <Card.Content>
          <View>
            {todo.todos?.map((todoItem, i) => {
              return (
                <View style={styles.todoItem}>
                  <RadioButton
                    value="first"
                    status={'checked'}
                    onPress={() => setChecked('first')}
                  />
                  <Text variant="bodyMedium">{todoItem.title}</Text>
                </View>
              )
            })}
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  divider: {
    marginTop: 10,
    marginBottom: 10
  }
})

export default TodoItem;