import React from 'react';
import { View, StyleSheet, Text,Image, Linking, ScrollView } from 'react-native';

const imghtml = require("../imghtml.png")
const imgpy = require("../py.jpeg")
const imgcss = require("../css.png")
const imgjava = require("../java.png")
const imgjs = require("../js.png")
const imgsql = require("../sql.jpeg")

export default function Vida_academica() {
 return (
   <View style ={styles.container}>
    <Text  style ={styles.text}> Sobre minha vida acadêmica eu estou no segundo ano do ensino médio cursando desenvolvimento de sistemas no ifal, além disso também faço curso de inglês(inclusive sou apaixonada nessa lingua). Sobre programação(algo que eu estou começando a me apaixonar), eu posso dizer que eu sei um pouco de cada linguagem que estou aprendendo, entre elas:
     </Text>
     <ScrollView>
     <Text style ={styles.text}> Python</Text>
     <Image source={imgpy} style={styles.img}></Image>
     <Text style ={styles.text}> CSS</Text>
     <Image source={imgcss} style={styles.img}></Image>
     <Text style ={styles.text}> HTML</Text>
     <Image source={imghtml} style={styles.img}></Image>
     <Text style ={styles.text}> Java</Text>
     <Image source={imgjava} style={styles.img}></Image>
     <Text style ={styles.text}> JavaScript</Text>
     <Image source={imgjs} style={styles.img}></Image>
     <Text style ={styles.text}> MySQL</Text>
     <Image source={imgsql} style={styles.img}></Image>
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
        width: 100,
        height: 100,
        borderRadius: 10

    },
    text:{
        color: "black",
        fontWeight: "bold",
        textAlign: "justify",
        margin: 20,
        
    }
    
  });
  