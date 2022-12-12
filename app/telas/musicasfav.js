import React from 'react';
import { View, StyleSheet, Text, ScrollView,Image } from 'react-native';

const img1 = require("../billie.jpeg")
const img2 = require("../cazuza.jpeg")
const img3 = require("../harry.webp")
const img4 = require("../jao.webp")
const img5 = require("../lady.jpeg")
const img6 = require("../lana.jpeg")
const img7 = require("../av.jpeg")
export default function Sobre() {
 return (
   <View style ={styles.container}>
    <ScrollView>
    <Image source={img1} style={styles.img}></Image>
    <Image source={img2} style={styles.img}></Image>
    <Image source={img3} style={styles.img}></Image>
    <Image source={img4} style={styles.img}></Image>
    <Image source={img5} style={styles.img}></Image>
    <Image source={img6} style={styles.img}></Image>
    <Image source={img7} style={styles.img}></Image>
      
    </ScrollView>

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
      height: 300,
      borderRadius: 20,
      marginBottom: 20

  },
    
  });