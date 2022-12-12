import React, { useRef, useEffect} from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';

export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(150)).current;
  const img1 = require("../IARADESENHO.jpeg")

  useEffect(()=> {

  Animated.loop(
    Animated.sequence([
        Animated.timing(larAnimada, {
          toValue: 450,
          duration: 4000,
          useNativeDriver: false
        }),
        Animated.timing(larAnimada, {
          toValue: 150,
          duration: 4000,
          useNativeDriver: false
        }),        
      ])
  ).start();

  }, []);

 return (
   <View style={styles.container}>
    <Text style={{fontWeight: "bold", textAlign: "justify", position:"absolute", top:60, }}>Obrigada pela atenção!!</Text>

      <Animated.View 
      style={{ 
        width: larAnimada,
        height: altAnimada,
        justifyContent: 'center',

        borderRadius: 50

      }}
      >
          <Image source={img1} style={{width:300, height:300}}></Image>
          
      </Animated.View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ffb6c1'
  },


})