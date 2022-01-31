/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = ({onPress,text,type = 'PRIMARY', bgColor, fgColor,style}) => {
    return (
        <TouchableOpacity style={[
            styles.container, styles[`container_${type}`],style
            ]} onPress={onPress}>
            <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        
        width:'100%',
        padding:15,
        marginVertical:5,
        top: 96,
        borderRadius:5,
        alignItems:'center',

    },
    container_PRIMARY:{
        backgroundColor:'#3b71f3',
    },
    container_TERTIARY:{
        top:148,
        borderRadius:5,
        alignItems:'center',
        width:'100%',
        padding:15,
        marginVertical:5,
        borderColor:'#b7b7b7',
        borderWidth:1,
    },
    text:{
        fontWeight:'bold',
        color:'#ffffff',
    },
    text_TERTIARY:{
        color:'#000000',
    },
    text_PRIMARY:{

    },
});

export default CustomButton;
