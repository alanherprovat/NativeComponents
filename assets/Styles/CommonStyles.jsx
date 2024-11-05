import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
export const Colors = {
  primary: "#526D82BF",
  secondary: "#2fe167",
  themeColor: "#232323",
  danger: "#ff4141",
  gradientStart: "rgba(255, 126, 95, 0.8)",
  gradientEnd: "rgba(254, 180, 123, 0.5)",
  onboardingTextFieldBorderColor: "#969696",
};
//   const [fontsLoaded, fontError] = useFonts({
//     "IDLC-Regular": require("../../assets/font/IDLC-Regula"),
//   });

const commonStyles = StyleSheet.create({
  SafeAreaContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  authContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
  },
  pageContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    backgroundColor: "#f1f1f1",
  },
  authCard: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 40,
    paddingHorizontal: 30,
    width: "100%",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 8,
    padding: 2,
    margin: 20,
    borderWidth: 1,
    borderColor: "#fff",
  },
  shadowProp: {
    shadowColor: "rgba(0,0,0,0.10)",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 3,
    marginStart: 0,
    color: "#655C5C",
    fontFamily: "k2d-regular",
  },
  headerText: {
    fontSize: 32,
    textAlign: "center",
    fontFamily: "k2d-bold",
  },
  subHeaderContainer: {
    // borderLeftWidth: 3,
    borderLeftColor: Colors.primary,
    marginTop: 5,
  },
  subHeaderText: {
    fontSize: 16,
    color: "#676767",
    // paddingHorizontal: 10,
    // paddingVertical: 5,
    // backgroundColor: Colors.primary+'10',
    // fontFamily: 'k2d-regular',
    // fontFamily: "k2d-bold",
    // textAlign: 'center',
  },
  onBoardingTextField: {
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 16,
  },
  appLoginTextField: {
    backgroundColor: "#EAEEF380",
    width: "100%",
    fontSize: 16,
  },
  authTextField: {
    marginVertical: 10,
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 12, // Increase vertical padding for better typing space
    borderRadius: 8, // Adjust the border-radius to better fit the container
  },
  textField: {
    marginVertical: 5,
    backgroundColor: "#fff23",
    width: "100%",
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.primary,
    // fontFamily: "k2d-regular",
  },
  onboardingInformationField: {
    backgroundColor: "#F6F8FA",
    width: "100%",
    fontSize: 16,
    // paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#969696",
    // color: "#D9D9D9",
    // fontFamily: "k2d-bold",
    // marginBottom: 10
  },
  checkboxContainer: {
    backgroundColor: "transparent",
    padding: 0,
    margin: 0,
    borderWidth: 0,
  },
  checkedContainer:{
    backgroundColor: "#2E8852",
    padding: 0,
    margin: 0,
    borderWidth: 0,
  },
  checkboxText: {
    fontSize: 12,
    fontFamily: "k2d-regular",
    color: "#3C3838",
  },
  onboardingDemoField: {
    marginBottom: 2,
    backgroundColor: "#F6F8FA",
    width: "100%",
    fontSize: 16,
    paddingVertical: 2,
    borderBottomColor: "#969696",
    borderBottomWidth: 1,
  },
});

export default commonStyles;

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.themeColor + "10",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "#fff",
    marginVertical: 5,
    // fontFamily: require("../font/K2D-Regular.ttf"),
    ...commonStyles.textField,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: Colors.themeColor + "10",
    borderRadius: 10,
    marginVertical: 5,
    // fontFamily: require("../font/K2D-Regular.ttf"),
    ...commonStyles.textField,
  },
});


export const customPickerStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    // paddingVertical: 10,
    // paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#969696",
    color: '#000000',
    paddingRight: 30, 
    // fontFamily: "k2d-regular",
  },
  inputAndroid: {
    fontSize: 16,
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#969696",
    color: '#000000',
    paddingRight: 30,
    fontFamily: "k2d-regular", 
  },
});
