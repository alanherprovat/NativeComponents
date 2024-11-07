import React from 'react';
import { View, StyleSheet,Text,Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
const { width } = Dimensions.get('window');
const MarketStatus = ({children}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(36, 222, 23, 0.65)', 'rgba(28, 189, 39, 0.65)']}
        start={{ x: 0.71, y: 0 }}
        end={{ x: 0.1, y: 1 }}
        style={styles.gradientBox}
      >
        <Text style={styles.textStyle}>
         {children}
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'flex-end',
    alignItems:'flex-end'
   
  },
  gradientBox: {
    width: width>450? 50:40,
    height: 'auto',
    borderRadius: 5,
  },
  textStyle:{
    // fontFamily: 'K2D-Regular',
    fontSize:12,
    fontWeight:'bold',
    // fontWeight: 600,
    // lineHeight: 11,
    textAlign:'center'
  }
});

export default MarketStatus;
