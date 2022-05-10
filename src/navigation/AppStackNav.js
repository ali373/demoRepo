import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//screens

import SplashScreen from '../screens/Login';
import CarPlay from '../screens/CarPlay';

const {Navigator, Screen} = createStackNavigator();

const AppStackNav = ({navigation}) => {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={SplashScreen}
        options={{headerShown: false}}
      />
         <Screen
        name="CarPlay"
        component={CarPlay}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};

export default AppStackNav;
