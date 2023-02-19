import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const TodoItemInput = ({
  onTextChange,
  onPressDelete
}) => {
  const [text, setText] = useState('')

  useEffect(() => {
    onTextChange?.(text)
  }, [text])

  return (
    <View style={styles.container}>
      <RadioButton
        value="first"
        status="unchecked"
      />
      <View style={styles.textInput}>
        <TextInput
          mode='flat'
          outlineStyle={styles.outlineStyle}
          contentStyle={styles.contentStyle}
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={styles.deleteIcon}>
        <TouchableHighlight onPress={onPressDelete}>
          <Icon name='delete' size={25} />
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  textInput: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  outlineStyle: {
    borderColor: 'transparent',
  },
  contentStyle: {
    backgroundColor: '#fffbfe'
  },
  deleteIcon: {
    marginLeft: 15
  }
})

export default TodoItemInput;