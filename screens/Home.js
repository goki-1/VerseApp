import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Earth from './Earth';
import Chat_Match_Like from './Chat_Match_Like';
import User from './User';
import Home1 from './Home1';

export default function Home({navigation}) {
  const [activeScreen, setActiveScreen] = useState('HOME');
  const color = '#8b8b8b';
  const activeColor = '#3e78fa';
  return (
    <SafeAreaView style={Styles.outercontainer}>
      {/* <View style={Styles.container}> */}
      <View style={Styles.container}>
        {activeScreen === 'HOME' && <Home1 />}
        {activeScreen === 'CHAT' && <Chat_Match_Like />}
        {activeScreen === 'EARTH' && <Earth />}
        {activeScreen === 'USER' && <User />}
      </View>
      <View style={Styles.topNavigation}>
        <Pressable onPress={() => setActiveScreen('HOME')}>
          <AntDesign
            name="dingding"
            size={30}
            color={activeScreen === 'HOME' ? activeColor : color}
          />
        </Pressable>
        <Pressable onPress={() => setActiveScreen('EARTH')}>
          <Ionicons
            name="earth"
            size={30}
            color={activeScreen === 'EARTH' ? activeColor : color}
          />
        </Pressable>
        <Pressable onPress={() => setActiveScreen('CHAT')}>
          <Ionicons
            name="ios-chatbubbles"
            size={30}
            color={activeScreen === 'CHAT' ? activeColor : color}
          />
        </Pressable>
        <Pressable onPress={() => setActiveScreen('USER')}>
          <FontAwesome
            name="user"
            size={30}
            color={activeScreen === 'USER' ? activeColor : color}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  topNavigation: {
    flexDirection: 'row',
    height: 60,
    padding: 10,
    paddingBottom: 15,
    width: '100%',
    justifyContent: 'space-around',
  },
  outercontainer: {
    flex: 1,
    backgroundColor: '#e4f2f7',
  },
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#e4f2f7',
  },
});
