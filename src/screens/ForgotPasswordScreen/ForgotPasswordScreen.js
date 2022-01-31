/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
const ForgotPasswordScreen = () => {

    const {control, handleSubmit} = useForm();
    const navigation = useNavigation();

    const onReset = () => {
        navigation.navigate('NewPassword');
    };

    const onBackToSignIn = () => {
        navigation.navigate('SignIn');
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}>Reset your password</Text>
            <Text 
            style={{
                color:'#000000',
                position:'absolute',
                top:115,
                left:20,

            
            }}>Username *</Text>
            <CustomInput
                name="username"
                control={control}
                placeholder="Username"
                rules={{
                  required: 'Username is required',
                }}
                
            />
            <CustomButton 
                text="Reset password"
                onPress={onReset}
            />
             <View style={{flexDirection:'row'}}>
                <Text style={{
                    top:120,color:'#000000'
                }}
                
                >Back to </Text>
                <Text style={{
                    top:120,color:'#3b71f3'
                }}
                onPress={onBackToSignIn}
                > Sign in</Text>
            </View>
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


export default ForgotPasswordScreen;
