import React,  { useState } from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import colors from "../components/colors";
// import IconBadge from 'react-native-icon-badge';
// import { AntDesign } from '@expo/vector-icons';

function AppButton({ customTxtStyle,loginBtnStyle,navigation,navigation1, iconButton, customIconButton, iconFreeButton, text, transparent, iconName, filterButton, containerStyle, imageStyle, btnTextStyle, cartHistoryBtnStyle, cartHistoryTxtStyle , navigateTo, cartProceedBtnStyle, pressEvent, onPress}) {

  const [backgroundcolor, setBackgroundcolor] = useState(colors.WHITE);

    const renderIconButton = () => {
        return(
            <TouchableOpacity
                style={containerStyle ? containerStyle : styles.button0Style}
                activeOpacity={0.5}
                onPress={navigation1}
            >
                <Image
                    source={iconName}
                    style={imageStyle ? imageStyle : styles.buttonImageIconStyle}
                />

                <Text style={btnTextStyle ? btnTextStyle : styles.buttonTextStyle}>{text}</Text>
    
            </TouchableOpacity>
        )
    };

    const renderCustomIconButton = () => {
        return(
            <TouchableOpacity
                style={styles.button2Style}
                activeOpacity={0.5}
                onPress={() => console.log("pressed")}
            >
                <View style={{}}>
                <IconBadge
                   
                    BadgeElement={
                    <Text style={{color:'#FFFFFF'}}>2</Text>

                    }

                    IconBadgeStyle={
                    {width:30,
                    height:30,
                    backgroundColor: colors.secondary,
                    position: 'relative', 

                    
                }
                    }
                    

                    />
                </View>

                <Text style={styles.buttonTextStyle}>{text}</Text>
       
            </TouchableOpacity>
        )
    };

    const renderIconFreeButton = () => {
        return(
            <TouchableOpacity
                style={ transparent ? styles.button1Style : cartHistoryBtnStyle ? cartHistoryBtnStyle : cartProceedBtnStyle ? cartProceedBtnStyle : loginBtnStyle ? loginBtnStyle : styles.button0Style }
                activeOpacity={0.5}
                onPress = {onPress} 
             >
           
                <Text style={transparent ? styles.buttonText1Style : cartHistoryTxtStyle ? cartHistoryTxtStyle :  customTxtStyle ? customTxtStyle : styles.buttonTextStyle }>{text}</Text>
       
             </TouchableOpacity>
        )
    };

  
    const renderFilterButton = () => {
        return(
            <TouchableOpacity onPress={() => handleFilterButtonPress()}>

                <View style={styles.defaultBtnView }>
                    <View style={{alignSelf:"center", marginRight:5}}>
                      <AntDesign name="cloud" size={24} color="black" />
                    </View>
                    <Text style = {styles.defaultFilterButtonText}>{ text }</Text>

                </View>
               
       
            </TouchableOpacity>
        )
    };
  
    return(
        <>

         { iconButton ? renderIconButton() : null }
         { iconFreeButton ? renderIconFreeButton() : null }
         { filterButton ? renderFilterButton() : null }
         { customIconButton ? renderCustomIconButton() : null }
        </>
       
        
    )
}

const styles = StyleSheet.create({
    button0Style: {
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: colors.secondary,
        height:50,

        borderWidth: 0.5,
        borderColor: '#fff',
        borderRadius: 25,
        marginTop:40,
        
        
      },
      button2Style: {
        
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderWidth: 0.5,
        borderColor: '#fff',
        borderRadius: 25,
        
        paddingVertical:10,
        paddingHorizontal:50,
      },
      button1Style: {
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: colors.WHITE,
        borderWidth: 0.5,
        borderColor: "#AAAAAA",
        borderRadius: 25,
        marginTop:20,
        height:50,
        
      },
      buttonImageIconStyle: {
          
        // padding: 10,
        // margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        backgroundColor:colors.secondary,
        alignSelf:"center",
    
      },
      buttonTextStyle: {
        color: colors.WHITE,
        // marginBottom: 4,
        // marginLeft: 10,
        fontSize:Platform.OS === 'android' ? 16: 20,
        padding:5,
        fontWeight:"600",
        alignSelf:"center",
        textAlign:"center"
    
      },
      buttonText1Style: {
        color: colors.BLACK,
        marginBottom: 4,
        marginLeft: 10,
        fontSize:Platform.OS === 'android' ? 17: 22,
        alignSelf:"center",
        fontSize:16,
    
      },
      filterButtonContainer:{
         
        justifyContent: "center",
        backgroundColor: colors.WHITE,
        borderWidth: 1,
        borderColor: "#AAAAAA",
        borderRadius: 25,
        alignSelf: 'flex-start' ,
        padding:14,
      },
      defaultFilterButtonText:{
        fontSize:16,
        fontWeight:"400",
        color:colors.BLACK,
        alignSelf:"center"
      },
      changedFilterButtonText:{

        fontSize:16,
        fontWeight:"400",
        color:colors.WHITE,

      },
      defaultBtnView: {
            flexDirection:"row",
            justifyContent: "center",
            backgroundColor: colors.WHITE,
            borderWidth: 1,
            borderColor: colors.BLACK,
            borderRadius: 5,
            height:40,
            // width:90,
            justifyContent:"center",
            paddingHorizontal:10,
            // alignSelf: 'flex-start' ,
            // padding:10,
            
      
      },
      changedBtnView: {
       
        justifyContent: "center",
        backgroundColor: colors.secondary,
       
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 25,
        alignSelf: 'flex-start' ,
        padding:14,
  
  }
})



export default AppButton;