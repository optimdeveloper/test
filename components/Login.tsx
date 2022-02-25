import React from 'react';
import {Text, View, TextInput, Button, Alert} from 'react-native';
import {useForm, useController} from 'react-hook-form';
import useFetch from '../custom-hook-api/useFetch';
import {inject, observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import Loading from './Loading';
const Input = ({name, control}) => {
  const {field} = useController({control, defaultValue: '', name});
  return (
    <TextInput
      style={{
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
      }}
      value={field.value}
      onChangeText={field.onChange}
    />
  );
};
function Login(props) {

  const navigation = useNavigation();
  const {setUser,setAlbums} = props.store;
  const {data, loading_api} = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );
 
  const {handleSubmit, control} = useForm();
  const onSubmit = values => {
    var find = [];
    find = data.filter(
      user => user.email == values.email && user.username == values.username,
    );
    if (find.length > 0) {
      setUser(find[0]);
     setAlbums(find[0])
      navigation.navigate('Albumes');
    } else {
      Alert.alert('not found user');
    }
  };
  return (
    <>
      {loading_api ? (
        <Loading />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{textAlign: 'center'}}>Login</Text>
          <Text>username</Text>
          <Input control={control} name="username" />
          <Text>email</Text>
          <Input control={control} name="email" />
          <Button
            style={{marginTop: 6}}
            title="Login"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      )}
    </>
  );
}
export default inject('store')(observer(Login));
