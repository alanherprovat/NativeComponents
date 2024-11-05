import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function PrevNextButton({
  mode,
  onPressLeft,
  onPressRight,
  children,
}) {
  return (
    <View style={styles.Container}>
      <Button
        //   mode="contained-tonal"
        onPress={() => console.log("Back button Pressed")}
        style={styles.buttonLeft}
      >
        <View style={styles.content}>
          <Icon name="arrow-back-outline" style={styles.LeftIcon} />
          <Text style={styles.buttonTextLeft}>Previous</Text>
        </View>
      </Button>
      <Button
        //   mode="contained-tonal"
        onPress={() => console.log("Next button Pressed")}
        style={styles.buttonRight}
      >
        <View style={styles.content}>
          <Text style={styles.buttonTextRight}>Next</Text>
          <Icon name="arrow-forward-outline" style={styles.Righticon} />
        </View>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: "row",
    width: "80%",
  },
  buttonLeft: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    // alignItems: 'center',
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(204, 10, 19, 1)",
    width: "50%",
    height: 50,
  },
  buttonRight: {
    backgroundColor: "rgba(204, 10, 19, 1)",
    // alignItems: 'center',
    justifyContent: "center",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(204, 10, 19, 1)",
    width: "50%",
    height: 50,
  },
  buttonLabel: {
    color: "transparent", // Hide label since we're using a custom View for alignment
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  buttonTextLeft: {
    color: "rgba(204, 10, 19, 1)",
    fontSize: 20,
    fontWeight: "400",
    // fontFamily: "K2D-Regular",
  },
  buttonTextRight: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    // fontFamily: "K2D-Regular",
  },
  Righticon: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    marginLeft: 8, // Space between text and icon
  },
  LeftIcon: {
    color: "rgba(204, 10, 19, 1)",
    fontSize: 24,
    marginRight: 8, // Space between text and icon
  },
});
