import React from "react";
import { StyleSheet, View,Dimensions } from "react-native";
import { Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
const { width } = Dimensions.get('window');
const ServiceCustomCard = ({ children, style }) => {
  return (
    <Card mode="contained" style={styles.card}>
      <LinearGradient
        colors={["#CC0A13", "#FFFFFF"]} // Linear gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[styles.gradient, style]} // Combine gradient and external styles
      >
        <Card.Content style={styles.content}>{children}</Card.Content>
      </LinearGradient>
    </Card>
  );
};

export default ServiceCustomCard;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
   
    width:width*0.9,
   
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width:'90%',
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: "rgba(210, 206, 206, 1)",
    height: 600,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
});
