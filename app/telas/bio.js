import React from 'react';
import { View, StyleSheet, Text,Image, Linking } from 'react-native';

const imgukulele = require("../imgukulele.jpeg")


export default function Sobre() {
 return (
   <View style ={styles.container}>
    <Image source={imgukulele} style={styles.img}></Image>
    <Text  style ={styles.text}>Bom, na página anterior eu me apresentei a vocês e agora eu irei falar sobre um pouco sobre meus gostos, bom como praticamente quase todo mundo eu sou extremamente apaixonada por música(inclusive toco ukulele e estou aprendendo violão), gosto muito de cozinhar (apesar de não saber, mas isso a gente releva), sou apaixonada em pássaros, principalmente calopsitas(tenho 4), amo compor músicas, pintar, escrever poemas, ler, as vezes programar(mas passo muita raiva) e aprender coisas novas, sempre estou disposta a aprender, pois conhecimento é algo que nunca é demais. </Text>
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
        width: 350,
        height: 350,
        borderRadius: 70

    },
    text:{
        color: "black",
        fontWeight: "bold",
        textAlign: "justify",
        margin: 20,
        
    }
    
  });