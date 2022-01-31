/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, StyleSheet, Pressable,Linking } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';


import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');

    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordRepeat, setPasswordRepeat] = useState();
    const [isAgreed,setIsAgreed] = useState(false);

    const supportedURL = 'https://google.com';
    const navigation = useNavigation();

    const onSignUpPressed = () => {
        navigation.navigate('ConfirmSignUp');
    };

   
    const onPrivacyPolicy = () => {
        Linking.openURL(supportedURL);
        };

    const onTermsOfUse = () => {
        Linking.openURL(supportedURL);
        
        };
    const onCreateAcc = () => {
        navigation.navigate('SignIn');
    };
            

    return (
        
        <View style={styles.root}>
           <Text style={styles.title}>Sign up</Text>
            
            <CustomInput
             name="username"
             control={control}
             placeholder="Username"
             rules={{
               required: 'Username is required',
               minLength: {
                 value: 3,
                 message: 'Username should be at least 3 characters long',
               },
               maxLength: {
                 value: 24,
                 message: 'Username should be max 24 characters long',
               },
             }}

            />
            <CustomInput 
            name="email"
            control={control}
            placeholder="Email"
            rules={{
              required: 'Email is required',
              pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
            }}
             

            />
            <CustomInput 
              name="password"
              control={control}
              placeholder="Password"
              secureTextEntry
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password should be at least 8 characters long',
                },
              }}

            />
            <CustomInput 
            name="password-repeat"
            control={control}
            placeholder="Repeat Password"
            secureTextEntry
            rules={{
              validate: value => value === pwd || 'Password do not match',
            }}

            />

            <CustomButton
             text="Sign up"
             onPress={handleSubmit(onSignUpPressed)}
             style={{top:150}}
            />
            

            <View style={{flexDirection:'row',alignItems:'center',right:30,top:5,}}>
                <CheckBox 
                    disabled={false}
                    value={isAgreed}
                    onValueChange={(newValue) => setIsAgreed(newValue)}
                    tintColors={{ true: '#3b71f3', false: '#e8e8e8' }}
                />
            <Text style={{color:'#000000'}}>I accept the</Text>
            <Text style={{color:'#3b71f3'}} onPress={onTermsOfUse}> Terms of Use</Text>
            <Text style={{color:'#000000'}}> and</Text>
            <Text style={{color:'#3b71f3'}} onPress={onPrivacyPolicy}> Privacy Policy</Text>

            </View>
            <Pressable  style={{position:'absolute',top:750,flexDirection:'row',}}>
                <Text style={{fontSize:12,}}>Have an account? </Text>
                <Text onPress={onCreateAcc} style={{color: '#3b71f3',fontSize:12,}}>Sign in</Text>
            </Pressable>
            
        </View>
        
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:16,
        
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#000000',
        margin:10,
        top:16,
    },
});

export default SignUpScreen;
