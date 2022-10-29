import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export default function Name() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.outercontainer}>
        <View style={Styles.container}>
          <Text style={Styles.tex1}>Enter your name</Text>
          <TextInput
            label="Name"
            placeholder="Type your username...."
            underlineColor="#777"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4f2f7',
    borderColor: 'royalblue',
    borderWidth: 2,
    margin: 15,
    borderRadius: 25,
  },
  tex1: {
    color: 'royalblue',
    fontSize: 44,
  },
  outercontainer: {
    flex: 1,
    backgroundColor: '#e4f2f7',
  },
});
