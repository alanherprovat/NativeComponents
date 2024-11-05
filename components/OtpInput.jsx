import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";
import { LogoIcon } from "../config/SvgIcons";
import commonStyles from "../assets/Styles/CommonStyles";
import { isTablet } from "../config/config";
import TimerComponent from "./TimerComponent";
// import { TextInput } from "react-native-paper";

export default function OtpInput() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);
  const [resetTimer, setResetTimer] = useState(false);
  const [isTimerComplete, setIsTimerComplete] = useState(false);
  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

//   const handleSubmit = async () => {
//     const otpValue = otp.join("");
//     if (otpValue.length === 6) {
//       const reqData = {
//         otpRegId: await AsyncStorage.getItem("otpRequestId"),
//         otp: otpValue,
//         mobile: "",
//       };
//       let { valid, message } = await VerifyOtpRequest(reqData);
//       if (valid) {
//         onValid();
//       } else {
//         ErrorToast("OTP is not valid!");
//         setOtp(["", "", "", "", "", ""]);
//       }
//     } else {
//       ErrorToast("Please enter a 6-digit OTP");
//     }
//   };

//   const handleResendOTP = async () => {
//     await resendOtp();
//     setResetTimer(true);
//     setIsTimerComplete(false);
//     setOtp(["", "", "", "", "", ""]);
//   };

  const handleTimerComplete = () => {
    setIsTimerComplete(true);
  };
  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        {otp?.map((digit, index) => (
          <TextInput
            placeholder="*"
            mode="outlined"
            
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            autoFocus={index === 0}
            // onSubmitEditing={handleSubmit}
          />
        ))}
      </View>
      <View style={{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10
      }}>
      <Text style={{...commonStyles.subHeaderText,color:"#000",fontWeight:"500"}}>New OTP can be sent after <TimerComponent
      
      interval={180}
      resetTimer={resetTimer}
      setResetTimer={setResetTimer}
      onComplete={handleTimerComplete}      
      /> mins</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    borderRadius: 16,
    overflow: "hidden", // Ensure the content stays within the rounded corners
    // height: 600,
    justifyContent: "center",
    // marginTop: 100,
  },
  textContainer:{
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:10
    // marginHorizontal:20
    // width:isTablet?"80%":"100%"
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: isTablet ? "center" : "space-around",
    width: "100%",
    marginHorizontal: isTablet ? 50 : "auto",
  },
  otpInput: {
    width: isTablet ? 60 : 50,
    height: isTablet ? 60 : 50,
    borderWidth: 1,
    borderColor: "#98A1B3",
    textAlign: "center",
    fontSize: 18,
    borderRadius: 6,
    marginHorizontal: isTablet && 8,
    backgroundColor: "#fff",
  },
});
