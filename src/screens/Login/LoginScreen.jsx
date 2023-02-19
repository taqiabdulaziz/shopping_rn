import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from '@react-native-material/core'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const LoginScreen = () => {
  return (
    <View style={style.container}>
      <TextInput
        label="Label"
        leading={props => <Icon name="account" {...props} />}
      />
      <TextInput
        label="Label"
        leading={props => <Icon name="account" {...props} />}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    height: '100%'
  }
})

export default LoginScreen;