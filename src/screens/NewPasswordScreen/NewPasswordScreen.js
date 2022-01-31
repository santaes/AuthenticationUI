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
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
    const {control, handleSubmit} = useForm();

    
    const navigation = useNavigation();

    const onReset = () => {
        navigation.navigate('Home');
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

            
            }}>Confirmation code *</Text>
            <CustomInput
                 placeholder="Code"
                 name="code"
                 control={control}
                 rules={{required: 'Code is required'}}
                
            />
            <View style={{margin:15,}}>

            </View>
            <CustomInput
                 placeholder="Enter your new password"
                 name="name"
                 control={control}
                 secureTextEntry
                 rules={{
                   required: 'Password is required',
                   minLength: {
                     value: 8,
                     message: 'Password should be at least 8 characters long',
                   },
                 }}
                
            />
            <Text 
            style={{
                color:'#000000',
                position:'absolute',
                top:210,
                left:20,

            
            }}>New Password *</Text>
            <CustomButton 
                text="Submit"
                onPress={handleSubmit(onReset)}
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


export default NewPasswordScreen;
