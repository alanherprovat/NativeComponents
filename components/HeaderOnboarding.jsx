import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { SaveAndExitIcon } from "../assets/icons/icons";

const HeaderOnboarding = () => (
  <View style={styles.container}>

    <IconButton
      icon={({ size, color }) => <Icon name="arrow-back-outline" height={size} style={styles.icon} />}
      size={30}
      onPress={() => console.log("Back button Pressed")}
    />


    <IconButton
      icon={({ size, color }) => <SaveAndExitIcon />}
      size={52}
      onPress={() => console.log("Save&Exit button Pressed")}
    />

  </View>
);

export default HeaderOnboarding;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16, // Add padding to the sides
    height: 90,
  },
  iconButtonContent: {
    // alignItems: 'center',
    justifyContent: "center",
  },
  icon: {
    color: "#000000",
    fontSize: 30,
  },
  button: {
    minHeight: 0,
    minWidth: 0,
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContent: {
    height: "auto",
    width: "auto",
    padding: 0,
    margin: 0,
  },
});
