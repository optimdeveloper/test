import React from "react";
import { StyleSheet } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
function Loading(){
  
    return(
      <Spinner
      visible={true}
      textContent={'Cargando espere...'}
      textStyle={styles.spinnerTextStyle}
    />
    )
    
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  spinnerTextStyle: {
      color: '#FFF'
  }
});

export default Loading