import React from "react";
import { View, TextInput, StyleSheet , Image } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { Feather } from '@expo/vector-icons';
import defaultStyles from "./styles";
import colors from "./colors";
// import { Ionicons } from '@expo/vector-icons';


const AppTextInput =({ iconname,icon,customIcon,imageSource, iconFree, customDoubleIcon, customIconRight, icon1Source,iconSource, icon1Style, icon2Source, icon2Style, customDoubleIconContainerStyle, icon2ContainerStyle, iconRightContainerStyle, iconFreeContainerStyle,placeholderStyle,containerStyle,iconStyle,placeholderStyles, ...otherProps }) => {

  const renderCustomIcon = () => {
    return(
      <View style={styles.container}>
      
      <Image style={styles.customicon} source={imageSource} />
       
       {/* <Ionicons
          name={iconname}
          size={20}xp
          color={colors.BLACK}
          style={styles.icon}
        /> */}
   <View style={{flex:1}}>
   <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={[defaultStyles.text,styles.customIconTextStyle]}
        {...otherProps}
      />
   </View>
      
   </View> 
    )
  }

  const renderCustomIconRight = () => {
    return(
      <View style={[ styles.container, iconRightContainerStyle, containerStyle]}>
      
      <View style={{flex:1, justifyContent:"center"}}>
        <TextInput
          placeholderTextColor={defaultStyles.colors.medium}
          style={[defaultStyles.text, styles.customIconRighText]}
          
          {...otherProps}
     /> 
      </View>
      
      <Image style={[styles.customiconRight, iconStyle]} source={iconSource} />
     
  
   </View> 
    )
  }


  const renderCustomDoubleIcon = () => {
    return(
      <View style={customDoubleIconContainerStyle? customDoubleIconContainerStyle : styles.container}>
  
      <View style={{}}>
        <Image style={icon1Style ? icon1Style : styles.customicon} source={icon1Source} />
      </View>

      <View style={{ flex: 1, }}>
        <TextInput
          placeholderTextColor={defaultStyles.colors.medium}
          style={[defaultStyles.text,styles.customIconRighText, placeholderStyles]}
          {...otherProps}
        />
      </View>
      
       <View style={icon2ContainerStyle ? icon2ContainerStyle : styles.customDoubleIcon2Container }>
          <Image style={icon2Style ? icon2Style : styles.customDoublIcon} source={icon2Source} />
       </View>
   

   </View> 
    )
  }
  const renderIcon = () => {
    return(
      <View style={[styles.container, ]}>
        {/* <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        /> */}
      
      <View style={{flex:1}}>
        <TextInput
            placeholderTextColor={defaultStyles.colors.medium}
            style={defaultStyles.text}
            {...otherProps}
          />
      </View>
       
        
   </View> 
    )
  }
  const renderTextInputOnly = () => {
    return(
      <View style={[styles.iconFreeContainer, iconFreeContainerStyle]}>
        <TextInput
          placeholderTextColor={defaultStyles.colors.medium}
          style={[defaultStyles.text,placeholderStyle]}
          {...otherProps}
        />
        
   </View> 
    )
  }

  return (
    <>
     {customIcon ? renderCustomIcon() : null }
     {customIconRight ? renderCustomIconRight() : null }
     {customDoubleIcon ? renderCustomDoubleIcon() : null }
     {icon ? renderIcon() : null }
     {iconFree ? renderTextInputOnly() : null }
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors.light_grey,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 15,
    height: Platform.OS === 'android' ? 50 : 55,
    marginBottom:  Platform.OS === 'android' ? 1 : 5,
    borderRadius:5,
    alignItems:"center"
  },
  iconFreeContainer: {
    backgroundColor: colors.greybackgound,
    borderRadius: 25,
    flexDirection: "row",
    width:  "100%",
    height: Platform.OS === 'android' ? 50 : 55,
    padding: 10,
    marginVertical: 5,
    borderRadius:50,
  },
  icon: {
    marginRight: 10,
  },

  customicon: {
    width: 30,
    height: 30,
    // marginRight:10,
  }, 

  customiconRight : {
    width: Platform.OS === 'android' ? 20 :20,
    height: Platform.OS === 'android' ? 20 :20,
    alignSelf:"center",
    
  },
  customDoublIcon: {
    width: Platform.OS === 'android' ? 20 :25,
    height: Platform.OS === 'android' ? 20 :25,
    alignSelf:"center",
  },
  customIconRighText:{
    height:25,
    // top:Platform.OS === 'android' ? 6 : 6,
  },
  customDoubleIcon2Container:{
  },
  customIconTextStyle:{
    // paddingLeft:10
  }
});

export default AppTextInput;
