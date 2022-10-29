import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import {Avatar, ListItem} from '@rneui/themed';

const CustomList = ({id, chatName, enterChat}) => {
  return (
    <View style={styles.card} key={id}>
      <Text style={styles.title}>{chatName}</Text>
      <Text style={styles.sub}>
        {enterChat}
      </Text>
    </View>
  );
};

export default CustomList;

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
    padding: 5,
  },
  card: {
    margin: 3,
    padding: 5,
    flex: 1,
    color: 'black',
    borderColor: 'rolyal blue',
    borderRadius: 6,
    backgroundColor: 'white',
    maxHeight: 138,
    borderBottomColor: 'black',
  },
  sub: {
    fontSize: 15,
    padding: 5,
  },
});
