import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default function Authloading() {
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.tex1}>Sign in</Text>
      <Text style={Styles.tex2}>moutherfucker</Text>
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
