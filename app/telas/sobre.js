 import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';

const img1 = require("../img1.jpeg")


export default function Sobre() {
 return (
   <View style ={styles.container}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://instagram.com/danii.vitoria?igshid=YmMyMTA2M2Y=') }}>
    <Image source={img1} style={styles.img}></Image>
    </TouchableOpacity>
    <Text  style ={styles.text}>Olá eu sou Danielle Vitória dos Santos Silva tenho 16 anos e sou aluna do Instituto Federal de Alagoas, eu nasci no dia 19 de abril de 2006 em uma linda tarde de quarta-feira em Maceió e desde então eu não sai daqui (ainda). Me considero uma pessoa determinada, esforçada, legal e alegre (na maior parte do tempo). </Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffb6c1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
        width: 300,
        height: 400,
        borderRadius: 50

    },
    text:{
        color: "black",
        fontWeight: "bold",
        textAlign: "justify",
        margin: 20,
        
    }
    
  });
  