import React, {useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Input, Text} from '@rneui/themed';
// import {app} from '../firebase';
// import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';

export default function Sign_up({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  useLayoutEffect(() => {}, [navigation]);

  const register = () => {
  //   const auth = getAuth(app);
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       updateProfile(auth.currentUser, {
  //         displayName: name,
  //         photoURL:
  //           image ||
  //           'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png',
  //       });
  //     })
  //     .catch((error) => alert(error.message));
   };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={Styles.container}>
      <View style={Styles.container}>
        {/* <StatusBar style="light" /> */}
        <Text h4 style={{color: 'royalblue'}}>
          Create an account on
        </Text>
        <Text h2 style={{color: 'royalblue', marginBottom: 30}}>
          Verse
        </Text>
        <View style={Styles.inputcontainer}>
          <Input
            placeholder="Full Name"
            type="text"
            value={name}
            onChangeText={text => setName(text)}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            placeholder="Password"
            type="password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Input
            placeholder="Profile Picture"
            type="text"
            value={image}
            onChangeText={text => setImage(text)}
            onSubmitEditing={register}
            inputContainerStyle={Styles.inp}
          />
        </View>
        <Button
          containerStyle={Styles.button}
          onPress={register}
          raised
          type="outline"
          title="Register"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b9e8f1',
    color: 'royalblue',
  },
  button: {
    width: 200,
    marginTop: 5,
    background: 'grey',
    borderRadius: 30,
  },
  inputcontainer: {
    width: 300,
  },
  inp: {
    backgroundColor: 'white',

    borderRadius: 10,
  },
});
