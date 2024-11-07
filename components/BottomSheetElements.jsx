import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BottomModal from './BottomSheet';
import { ActiveMailIcon, ActiveWhatsAppIcon, EmailIcon, WhatsAppIcon } from '../config/SvgIcons';
import OnboardingInput from './OnboardingInput';
import CommonButton from './CommonButton';

export default function BottomSheetElements() {
    const communicationMethods = [
        {
          title: "WhatsApp",
          inActiveIcon: <WhatsAppIcon />,
          activeIcon: <ActiveWhatsAppIcon />,
        },
        {
          title: "Email",
          inActiveIcon: <EmailIcon />,
          activeIcon: <ActiveMailIcon/>,
        },
      ];
    
      const [selected, setSelected] = useState(communicationMethods[0].title);
    
      const handleSelect = (title) => {
        setSelected(title);
      };
  return (
    <BottomModal>
              <View style={styles.bottomSheetHeaderContainer}>
          <Text style={styles.bottomSheetHeader}>Communication Method</Text>
        </View>

        <View style={styles.buttonContainer}>
          {communicationMethods.map((item, index) => {
            const isActive = selected === item.title;
            return (
              <TouchableOpacity
                key={index}
                style={isActive ? styles.activeButton : styles.inActiveButton}
                onPress={() => handleSelect(item.title)}
              >
                {isActive ? item.activeIcon : item.inActiveIcon}
                <Text style={isActive ? styles.activeButtonText : styles.buttonText}>{item.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <OnboardingInput value={selected==="Email"?"exp@gmail.com":"+14055860054"} inputTextStyle={styles.inputTextStyle} style={styles.inputStyle} />

        <CommonButton 
          RightIcon={true} 
          ButtonStyles={styles.submitButton} 
          buttonTextStyles={styles.submitButtonText} 
          RightIconStyles={styles.rightIconStyles}
        >
          Continue
        </CommonButton>
    </BottomModal>
  )
}

const styles = StyleSheet.create({
    iconContainer: {
        alignSelf: "center",
        marginBottom: 10,
      },
      bottomSheetHeaderContainer: {},
      bottomSheetHeader: {
        fontSize: 24,
        fontWeight: "500",
      },
      buttonContainer: {
        width:"100%",
        flexDirection: "row",
        gap: 10,
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
      activeButton: {
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
        backgroundColor: "#FFDFDCBF",
      },
      buttonText: {
        fontSize: 22,
        color: "#938080",
      },
      submitButton: {
        width: "100%",
      },
      submitButtonText: {
        color: "#000",
      },
      activeButtonText: {
        fontSize: 22,
        color: "#000000",
      },
      rightIconStyles: {
        color: "rgba(204, 10, 19, 1)",
      },
      inputTextStyle: {
        fontSize: 18,
        fontWeight: "bold",
      },
      inputStyle: {
        borderRadius: 10,
        paddingHorizontal: 10,
      },
})