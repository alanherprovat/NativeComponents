import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../assets/Styles/CommonStyles";
export default function OnboardingInput(props) {
    const {
        leftIcon = null,
        rightIcon = null,
        rightIconPress = ()=>{},
        leftIconPress = ()=>{},
        readOnly
        // applicantInformation,
        // style
    } = props
    // console.log(props)
  const [focusStyle, setFocusStyle] = useState(false);
  const inputRef = useRef(null);

  return (
    <View style={[props?.style,props.readOnly?styles.readOnlyContainer:styles.container]}>
                {leftIcon && (
          <TouchableOpacity
            onPress={leftIconPress}
            style={styles.leftIconContainer}
          >
           <Icon
            name={leftIcon}
            size={24}
            color="#fff"
            style={styles.leftIcon}
          />
          </TouchableOpacity>
        )}
      <TextInput
        {...props}
        ref={inputRef}
        style={[
          styles.textField,
          { backgroundColor: "transparent" },
        ]}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        cursorColor="#000"
        mode="flat" 
        readOnly
      />
      {rightIcon && (
            <TouchableOpacity onPress={rightIconPress}>
            <Icon
              name={rightIcon}
              size={20}
              color={Colors.primary}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    borderWidth:1,
    borderColor:"#98A1B3",
    width:"100%",
    // borderRadius:8
  },
  readOnlyContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    borderWidth:1,
    borderColor:"#98A1B3",
    width:"100%",
    backgroundColor:"#F3E0E0"
    // borderRadius:8
  },
  textField: {
    // flex: 1,
    fontSize: 16,
    paddingHorizontal: 8, // Adjust padding if needed
  },
  leftIconContainer:{
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    justifyContent:'center',
    borderWidth: 1,
    borderColor: "#98A1B3", // Color for the right border
    paddingHorizontal: 20, // Space between the border and the input
    // height: '200%', // Ensures full height of the input container
    alignItems: 'center',
    backgroundColor:"#CC0A13"
  }
});
