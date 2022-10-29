import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import CustomList from './CustomList';
import {useNavigation} from '@react-navigation/native';
import {DataStore} from '@aws-amplify/datastore';
import {UntitledModel} from '../src/models';
//import { API, graphqlOperation } from '@aws-amplify';

export default function Home1({}) {
  const navigation = useNavigation();
  const [chats, setChats] = useState([]);
  const createChat = async () => {
    try {
      const posts = await DataStore.query(UntitledModel);
      setChats(
        posts.map((doc) => ({
          id: doc.id,
          chatName: doc.chatName,
          enterchat: doc.enterchat,
        })),
      );
      //console.log("Posts retrieved successfully!", JSON.stringify(posts, null, 2));
    } catch (error) {
      console.log("Error retrieving posts", error);
    }
  };
  useEffect(() => {
    createChat();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: ' V e r s e',
      headerStyle: {backgroundColor: '#fff'},
      headerTitleStyle: {color: 'royalblue', fontWeight: '800'},
      headerTintColor: 'black',
    });
  }, [navigation]);
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        {chats.map(({id, chatName, enterchat}) => (
          <CustomList
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterchat}
          />
        ))}
      </ScrollView>
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
