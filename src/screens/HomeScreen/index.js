/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import image from '../../../assets/images/Logo_1.png';

const HomeScreen = () => {
    return (
        <View style={{alignSelf:'center'}}>
            <Text style={{fontSize:24,alignSelf:'center'}}> Home Screen</Text>
            <Image style={{width:300,height:300,borderRadius:250,marginTop:100,}} source={image} resizeMode="contain"/>
        </View>
    );
};

export default HomeScreen;
