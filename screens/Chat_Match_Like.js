import React, {useLayoutEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Button,
  View,
} from 'react-native';
import {DataStore} from '@aws-amplify/datastore';
import {UntitledModel} from '../src/models';
// import /{app} from '../firebase';
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   doc,
//   setDoc,
// } from 'firebase/firestore';
//import {Button, Icon} from '@rneui/base';

export default function Chat_Match_Like() {
  const [input, setInput] = useState('');
  const [inpu, setInpu] = useState('');
  //useLayoutEffect(() => {}, [navigation]);
  // const db = getFirestore(app);
  const createChat = async () => {
    await DataStore.save(
      new UntitledModel({
        chatName: inpu,
        enterchat: input,
      }),
    );
    console.log("llllllllllllllllllllllllll")
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.inp2}
          placeholder="Title of the story"
          value={inpu}
          onChangeText={text => setInpu(text)}
        />
        <TextInput
          style={styles.inp}
          placeholder="Write your story"
          value={input}
          onChangeText={text => setInput(text)}
          onSubmitEditing={createChat}
          multiline={true}
        />
        <View style={{width: '30%', alignSelf: 'center'}}>
          <Button onPress={createChat} title="Publish" />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#b9e8f1',
  },
  inp2: {},
  inp: {
    marginBottom: 20,
  },
});
