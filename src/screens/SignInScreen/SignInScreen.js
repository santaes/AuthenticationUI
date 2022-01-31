/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  Alert,
} from "react-native";
import Logo from "../../../assets/images/Logo_1.png";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {
 

  const { height } = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = async data => {
     
    try {
      const response = await Auth.signIn(data.username, data.password);
     console.log(response);
      
      navigation.navigate('Home');
    } catch (e) {
        Alert.alert('Oops', e.message);
    }

      // validate user !
        
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };
  const onSignInFacebook = () => {
    console.warn("FACEBOOK");
  };
  const onSignInGoogle = () => {
    console.warn("GOOGLE");
  };

  const onSignInApple = () => {
    console.warn("APPLE");
  };
  const onCreateAcc = () => {
    navigation.navigate("SignUp");
  };
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.15 }]}
        resizeMode="contain"
      />

      <CustomInput
        name="username"
        
        placeholder="User name"
        control={control}
        rules={{required: 'Username is required'}}
      />
      <CustomInput
        name="password"
        
        placeholder="Password"
        secureTextEntry
        control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            },
          }}
      />
      <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} style={{}} />
      <Text
        onPress={onForgotPasswordPressed}
        style={{
          position: "absolute",
          top: 325,
          right: 20,
          fontSize: 12,
          color: "#3b71f3",
        }}
      >
        Forgot Password?
      </Text>

      <Text style={{ top: 120, color: "#000000" }}>or</Text>

      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        type="TERTIARY"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        type="TERTIARY"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        type="TERTIARY"
      />
      <Pressable
        style={{ position: "absolute", top: 750, flexDirection: "row" }}
      >
        <Text style={{ fontSize: 12 }}>Haven't account yet? </Text>
        <Text onPress={onCreateAcc} style={{ color: "#3b71f3", fontSize: 12 }}>
          Sign up
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: "70%",
    maxHeight: 300,
    borderRadius: 500,
    maxWidth: 500,
    top: 30,
  },
  root: {
    alignItems: "center",
    padding: 16,
  },
});

export default SignInScreen;
