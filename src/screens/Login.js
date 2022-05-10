import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native';
import * as Yup from 'yup';
import SubmitButton from '../components/SubmitButton';
import colors from '../components/colors';
import AppText from '../components/AppText';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().max(50),
  password: Yup.string().required().min(5).label('password'),
});
const Login = ({navigation}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  useEffect(() => {}, []);

  const handleLogin = async values => {
    navigation.navigate('CarPlay');
  };
  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.background}}>
      <SafeAreaView style={styles.container}>
        <AppText style={styles.h2}>Login To Your Account</AppText>

        <View style={{marginHorizontal: 30}}>
          <AppForm
            initialValues={{email: '', password: ''}}
            onSubmit={values => handleLogin(values)}
            validationSchema={validationSchema}
            secureTextEntry={passwordVisibility}>
            <View style={{marginTop: '8%'}}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon
                icon="email-outline"
                name="email"
                placeholder="Email Address"
                textContentType="emailAddress"
              />
            </View>
            <View style={{marginTop: '8%'}}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon
                icon="lock"
                name="password"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
            </View>
            <View style={styles.btnView}>
              {/* <ProgressDialog
                visible={progressVisible}
                title="Signing In"
                message="Please wait..."
              /> */}
              <SubmitButton title="LOGIN" navigation="CarPlay" />
            </View>
          </AppForm>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    // padding: 10,
    // marginHorizontal:20,
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.background,
    marginBottom: 110,
  },

  h2: {
    fontSize: Platform.OS === 'ios' ? 26 : 22,
    fontWeight: 'bold',
    color: colors.BLACK,
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: Platform.OS === 'ios' ? 35 : 28,
    marginBottom: 30,
  },
  h3: {
    fontSize: Platform.OS === 'ios' ? 26 : 22,
    fontWeight: 'bold',
    color: colors.secondary,
    textAlign: 'left',
    marginHorizontal: 30,
    marginTop: Platform.OS === 'ios' ? 35 : 30,
  },
  h5: {
    fontSize: Platform.OS === 'ios' ? 17 : 17,
    fontWeight: 'bold',
    color: colors.BLACK,
    textAlign: 'right',
    marginHorizontal: 20,
    marginVertical: Platform.OS === 'ios' ? 17 : 17,
    marginRight: 30,
  },
  h6: {
    // fontSize: Platform.OS === "ios" ? 17 : 17,
    // fontWeight:"bold",

    fontSize: Platform.OS === 'ios' ? 20 : 22,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginHorizontal: 5,

    marginVertical: Platform.OS === 'ios' ? 17 : 57,
  },
  h7: {
    fontSize: Platform.OS === 'ios' ? 17 : 17,
    fontWeight: Platform.OS === 'ios' ? '600' : null,
    color: colors.grey,
    // textAlign:"right",
    marginVertical: Platform.OS === 'ios' ? 17 : 17,
  },
  suboptionsRow1: {
    // marginTop: "15%",
    // marginBottom: "10%",
    marginHorizontal: 30,
  },
  icon1: {
    width: Platform.OS === 'android' ? '49%' : '49%',
    height: Platform.OS === 'android' ? '9%' : '9%',
    marginTop: Platform.OS === 'android' ? '10%' : '15%',
    alignSelf: 'center',
    marginHorizontal: 30,
  },
  loginBtnStyle: {
    backgroundColor: colors.BLACK,
    // flexDirection: 'row',
    justifyContent: 'center',
    height: Platform.OS === 'android' ? 60 : 70,
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 5,
    // marginTop:20,
    marginHorizontal: 30,
    marginVertical: 0,
    marginBottom: 0,
  },
  bottomRow: {
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? -25 : 0,
  },
  btnView: {
    marginTop: 55,
  },
});

