import React, { useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../assets/Styles/CommonStyles";
const baseContainerStyle = {
  flexDirection: "row",
  borderWidth: 1,
  borderColor: "#98A1B3",
  width: "100%",
  overflow: "hidden",
};
export default function OnboardingInput(props) {
    const {
      value,
        leftIcon = null,
        rightIcon = null,
        rightIconPress = ()=>{},
        leftIconPress = ()=>{},
        readOnly,
        inputTextStyle,
        // applicantInformation,
        // style
    } = props
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
        value={props.value}
        ref={inputRef}
        style={{
          // ...styles.textField,
          ...props.inputTextStyle,
          backgroundColor: "transparent",
        }}
        underlineColor="transparent"
        activeUnderlineColor="transparent"
        cursorColor="#000"
        mode="flat" 
        // readOnly
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
    ...baseContainerStyle,
  },
  readOnlyContainer: {
    ...baseContainerStyle,
    backgroundColor:"#F3E0E0"
    // borderRadius:8
    },
  textField: {
    // flex: 1,
    fontSize: 16,
    paddingHorizontal: 8, 
  },
  leftIconContainer:{
    borderTopLeftRadius:8,
    borderBottomLeftRadius:8,
    justifyContent:'center',
    borderWidth: 1,
    borderColor: "#98A1B3", 
    paddingHorizontal: 20, 
    alignItems: 'center',
    backgroundColor:"#CC0A13"
  }
});
