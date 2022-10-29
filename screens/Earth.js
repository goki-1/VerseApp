import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default function Earth() {
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.tex1}>Earth</Text>
      <Text style={Styles.tex2}>Show</Text>
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
