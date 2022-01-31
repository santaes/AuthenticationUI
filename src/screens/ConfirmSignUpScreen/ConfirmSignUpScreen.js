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
import { useForm } from 'react-hook-form';

const ConfirmSignUpScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onConfirm = () => {
    navigation.navigate('Home');
  };
  const onBackToSignIn = () => {
    navigation.navigate('SignIn');
  };

  const resendCode = () => {
    console.warn('resend code');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm Sign Up</Text>
      <Text
        style={{
          color: '#000000',
          position: 'absolute',
          top: 115,
          left: 20,
        }}
      >
        Username *
      </Text>
      <Text
        style={{
          color: '#000000',
          position: 'absolute',
          top: 200,
          left: 20,
        }}
      >
        Confirmation Code *
      </Text>
      <CustomInput
        name="username"
        control={control}
        placeholder="Enter your username"
      />
      <View style={{ marginVertical: 10 }}></View>
      <CustomInput
        name="code"
        control={control}
        placeholder="Enter your confirmation code"
        rules={{
          required: 'Confirmation code is required',
        }}
      />
      <CustomButton text="Confirm" onPress={handleSubmit(onConfirm)} />
      <Text
        onPress={resendCode}
        style={{
          color: '#3b71f3',
          top: 110,
          left: -110,
        }}
      >
        Resend code
      </Text>
      <Text
        onPress={onBackToSignIn}
        style={{
          color: '#3b71f3',
          top: 90,
          left: 100,
        }}
      >
        Back to Sign In
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    margin: 10,
    top: 16,
  },
});

export default ConfirmSignUpScreen;
