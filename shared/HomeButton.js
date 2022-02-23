import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity,} from 'react-native';
import React from 'react';

export default function HomeButton({text}) {
    return (


<TouchableOpacity   style={styles.buttoncontainer}>
  <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
  


        );
    }
    
    const styles =StyleSheet.create({
        buttoncontainer: {
            backgroundColor: '#FFFFFF',
            width: "100%",
            height: "15%",
            borderRadius:100,
            borderWidth:3,
            borderColor:'#656161',
            alignItems:'center',
            justifyContent:'center',
            marginBottom:10,

            
        
            shadowOffset:{
            width: 0,
            height: 10,
            },
            shadowOpacity: 1.0,
            shadowRadius: 5.46,
            elevation: 1,
            shadowColor: "black",
            
         
          },
          buttonText: {
            fontSize: 17,
            color: '#000',
            //fontFamily:'MotionPicture_PersonalUseOnly',
            fontWeight: 'bold',
            textAlign:'center',
            
          }, 
          

    })