import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

export default function Comment({post}) {

  const renderItem = ({item}) => (
      <View style={styles.item}>
        <Text style={styles.body}>{item.email}</Text>
        <Text style={styles.body}>{item.body.substring(0,40)+'...'}</Text>
      </View>
  );
  
  return (
    <>
     <FlatList
        data={post.comments}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     
    </>
  );
}
const styles = StyleSheet.create({
    item: {
      backgroundColor: 'red',
      padding: 30,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 15,
    },
    body: {
      fontSize: 10,
    },
  });
