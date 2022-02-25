import React, {useState} from 'react';
import {
  Button,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import {useForm, useController} from 'react-hook-form';
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
function ModalComponent({post,props}) {
    const {setNewComment,user} = props.store;

  const {handleSubmit, control} = useForm();
  const [modalVisible, setModalVisible] = useState(false);
  const onSubmit = values => {
    setModalVisible(false);
    setNewComment(values,post,user)
    
  };

  return (
    <>
      {modalVisible ? (
        <View>
          <Text style={styles.modalText}>descripcion comentario</Text>
          <Input control={control} name="description" />
          <Button
            style={{marginTop: 6}}
            title="Agregar"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      ) : (
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>+</Text>
        </Pressable>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default ModalComponent