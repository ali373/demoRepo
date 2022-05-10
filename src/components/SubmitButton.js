import React from "react";
import { useFormikContext } from "formik";
import colors from "./colors";
import AppButton from "./AppButton";
import { TouchableOpacity,StyleSheet } from "react-native";

function SubmitButton({ navigation,title }) {

  const { handleSubmit } = useFormikContext();


  return (
      <AppButton  
        navigation={navigation}
        text={title}
        iconFreeButton
        loginBtnStyle = {styles.loginBtnStyle} 
        onPress={handleSubmit}
      />
        );
}

export default SubmitButton;
const styles = StyleSheet.create({
  // loginBtnStyle:{
  //   backgroundColor:colors.secondary,
  //   fontWeight:"bold",
  //   // color:colors.white,
  //       // flexDirection: 'row',
  //   justifyContent: "center",
  //   height:Platform.OS === 'android' ? 60 : 70,
  //   borderWidth: 0.5,
  //   borderColor: '#fff',
  //   borderRadius: 5,
  //   // marginTop:20,
  //   marginHorizontal:30, 
  //   marginVertical:0,
  //   marginBottom:0,
  //   // alignItems:"center"
  // },
  loginBtnStyle: {
    backgroundColor: colors.BLACK,
    // flexDirection: 'row',
    justifyContent: "center",
    height: Platform.OS === "android" ? 60 : 70,
    borderWidth: 0.5,
    borderColor: "#fff",
    borderRadius: 5,
    // marginTop:20,
    marginHorizontal: 30,
    marginVertical: 0,
    marginBottom: 0,
  },
  
  
})

