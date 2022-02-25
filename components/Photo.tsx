import React from 'react';
import {inject, observer} from 'mobx-react';
import {FlatList, Image} from 'react-native';
import useFetch from '../custom-hook-api/useFetch';
import Loading from './Loading';
const renderItem = ({item}) => (
  <Image style={{width: 'auto', height: 50}} source={{uri: item.url}} />
);
function Photo(props) {
  const {album} = props.store;
  const {data, loading_api} = useFetch(
    `https://jsonplaceholder.typicode.com/albums/${album.id}/photos`,
  );
  // Alert.alert(JSON.stringify(loading_api))
  return (
    <>
      {loading_api ? (
        <Loading />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
    </>
  );
}

export default inject('store')(observer(Photo));
