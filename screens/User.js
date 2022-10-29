import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import {app} from '../firebase';
// import {getAuth, signOut} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
import Amplify, {Auth} from 'aws-amplify';

export default function User() {
  const navigation = useNavigation();
  // const auth = getAuth(app);
  const signout = () => {
    Auth.signOut();
    //   .then(() => {
    //     navigation.replace('Login');
    //   })
    //   .catch((error) => alert(error.message));
  };
  return (
    <SafeAreaView style={Styles.container}>
      <TouchableOpacity onPress={signout}>
        <Text>Sign out</Text>
      </TouchableOpacity>
      <Text style={Styles.tex1}>User</Text>
      <Text style={Styles.tex2}>ss</Text>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b9e8f1',
  },
  tex1: {
    color: 'royalblue',
    fontSize: 44,
  },
  tex2: {
    color: 'royalblue',
    fontSize: 44,
  },
});
