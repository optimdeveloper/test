import React, {  useEffect } from 'react';
import {inject, observer} from 'mobx-react';
import {Text,Button, View, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import useFetch from '../custom-hook-api/useFetch';
import { useNavigation } from '@react-navigation/native';
import Loading from './Loading';

function Album(props) {
  const navigation = useNavigation();
  const {user, setAlbums,setAlbum} = props.store;
  const {data, loading_api} = useFetch(
    `https://jsonplaceholder.typicode.com/users/${user.id}/albums`,
  );
  const selectAlbum = (item)=>{
   setAlbum(item)
   navigation.navigate("Photos")
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={()=> {selectAlbum(item)}}>
    <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
  </TouchableOpacity>
   
  );
  return (
    <>
      {loading_api ? (
        <Loading />
      ) : ( <>
        <Button
        style={{backgroundColor:"red"}}
        title="Posts"
        onPress={()=> navigation.navigate("Posts")}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'orange',
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
});
export default inject('store')(observer(Album));
