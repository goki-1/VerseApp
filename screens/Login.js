import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Input, Image} from '@rneui/themed';
// import {app} from '../firebase';
import Home from './Home';
// import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const auth = getAuth(app);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(authUser => {
  //     if (authUser) {
  //       navigation.replace('Home');
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  const Log_in = () => {
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //   })
    //   .catch((error) => alert(error));
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.container}>
        {/* <StatusBar style="light" /> */}
        <View style={Styles.inputContainer} onPress={Keyboard.dismiss}>
          <Text style={{marginBottom: 10, fontSize: 30, color: 'royalblue'}}>Welcome to Verse</Text>
          <Text h4 style={{marginBottom: 30, fontSize: 15, color: 'royalblue', fontWeight:'800'}}>
            Alternate Universes of Movies and Series
          </Text>
          <Input
            style={Styles.inp}
            placeholder="Email"
            type="email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Input
            style={Styles.inp}
            placeholder="Password"
            secureTextEntry
            type="password"
            value={password}
            onChangeText={text => setPassword(text)}
            onSubmitEditing={Log_in}
          />
        </View>
        <Button
          containerStyle={Styles.button}
          titleStyle={{color: 'black'}}
          onPress={Log_in}
          type="outline"
          title="Login"
        />
        <Text style={Styles.tex}>Don't have a account yet</Text>
        <Button
          containerStyle={Styles.button}
          titleStyle={{color: 'black'}}
          type="outline"
          title="Sign Up"
          onPress={() => navigation.navigate('Sign_up')}
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
  inputContainer: {
    width: 300,
  },
  tex: {
    marginTop: 10,
    fontWeight: '700',
  },
  inp: {},
  button: {
    width: 200,
    marginTop: 10,
    backgroundColor: 'grey',
    elevation: 10,
    borderColor: 'black',
    borderRadius: 15,
  },
});
