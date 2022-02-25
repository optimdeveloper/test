import React from 'react';
import {inject, observer} from 'mobx-react';
import {Text, Alert,View,Button, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import useFetch from '../custom-hook-api/useFetch';
import { useNavigation } from '@react-navigation/native';
import Comment from './Comment';
import ModalForm from './ModalForm';

function Post(props) {
  const {posts} = props.store;
  const selectPost = (item)=>{

  }
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=> {selectPost(item)}}>
    <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.body}>{item.body}</Text>
   <ModalForm  props={props} post={item}/>
    <Comment post={item}></Comment>
  </View> 
 
  </TouchableOpacity>
   
  );
  return (
    <>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'orange',
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
    heigth:200
  },
  title: {
    fontSize: 15,
  },
  body: {
    fontSize: 10,
  },
});
export default inject('store')(observer(Post));
