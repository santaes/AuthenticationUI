/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmSignUpScreen from '../screens/ConfirmSignUpScreen';

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="SignIn" 
                    component={SignInScreen} 
                    options={{headerShown:false}} 
                />
                <Stack.Screen 
                    name="SignUp" 
                    component={SignUpScreen} 
                    options={{headerShown:false}} 
                />
                <Stack.Screen 
                    name="ConfirmSignUp" 
                    component={ConfirmSignUpScreen} 
                    options={{headerShown:false}} 
                />
                <Stack.Screen 
                    name="ForgotPassword" 
                    component={ForgotPasswordScreen} 
                    options={{headerShown:false}} 
                />
                <Stack.Screen 
                    name="NewPassword" 
                    component={NewPasswordScreen} 
                    options={{headerShown:false}} 
                />
                 <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{headerShown:false}} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
