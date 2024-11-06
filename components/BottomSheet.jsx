import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useCallback, useMemo, useRef, useState } from "react";
import { Button } from "react-native-paper";
import { ActiveMailIcon, ActiveWhatsAppIcon, EmailIcon, WhatsAppIcon } from "../config/SvgIcons";
import OnboardingInput from "./OnboardingInput";
import CommonButton from "./CommonButton";

export default function BottomModal({
  onClose,
  isBottomModalVisible,
  setBottomModalVisible,
}) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // Handle closing the bottom sheet
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const communicationMethods = [
    {
      title: "WhatsApp",
      inActiveIcon: <WhatsAppIcon />,
      activeIcon:<ActiveWhatsAppIcon/>,
    },
    {
      title: "Email",
      inActiveIcon: <EmailIcon />,
      activeIcon: <ActiveMailIcon/>,
    },
  ];
  const [selected, setSelected] = useState(communicationMethods[0].title);
  const handleSelect = (title)=>{
    // console.log(item)
    setSelected(title)
  }
  return (
    // <View style={{ flex: 1 }}>
    <BottomSheet
    index={1}
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      onChange={handleSheetChange}
      backgroundStyle={styles.bottomSheetContainer}
      // enablePanDownToClose={isBottomModalVisible}
      // onClose={onClose}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.bottomSheetHeaderContainer}>
          <Text style={styles.bottomSheetHeader}>Communication Method</Text>
        </View>
        <View style={styles.buttonContainer}>
          {communicationMethods.map((item, index) => {
            const isActive = selected===item.title
            return (
              <TouchableOpacity key={index} style={isActive?styles.activeButton:styles.inActiveButton} onPress={()=>handleSelect(item.title)}>
                {isActive?item.activeIcon:item.inActiveIcon}
                <Text style={isActive?styles.activeButtontext:styles.buttonText}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
          <OnboardingInput value="+14055860054" inputTextStyle={styles.inputTextStyle} style={{borderRadius:10,paddingHorizontal:10}}/>
          <CommonButton RightIcon={true} ButtonStyles={styles.submitButton} buttonTextStyles={styles.submitButtontext} RightIconStyles={styles.rightIconStyles}>
            Continue
          </CommonButton>
      </BottomSheetView>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    borderRadius: 0,
  },
  contentContainer: {
    position: "absolute",
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 20,
    gap:10
    // alignItems: 'center',

    // borderRadius:0
  },
  bottomSheetHeaderContainer: {},
  bottomSheetHeader: {
    fontSize: 24,
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    // alignItems:"center"
  },
  inActiveButton: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#938080",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    width: 180,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  activeButton:{
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#CC0A13",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 10,
    width: 180,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#FFDFDCBF"
  },
  
  buttonText: {
    fontSize: 22,
    color: "#938080",
  },
  submitButton:{
   width:"100%",
  //  alignItems:"center"
  //  paddingVertical:10,
  //  color:"#000"
  },
  submitButtontext:{
    color:"#000"
  },
  activeButtontext:{
    fontSize:22,
    color:"#000000"
  },
  rightIconStyles:{
    color: "rgba(204, 10, 19, 1)",
  },
  inputTextStyle:{
    fontSize:18,
    fontWeight:"bold"
  }
});
