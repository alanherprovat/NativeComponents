import { StatusBar } from "expo-status-bar";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CommonButton from "./components/CommonButton";
import OnboardingInput from "./components/OnboardingInput";
import commonStyles from "./assets/Styles/CommonStyles";
import DocumentPicker from "./components/DocumentPicker";
import PrevNextButton from "./components/PrevNextButton";
import HeaderOnboarding from "./components/HeaderOnboarding";
import OnboardingMessageCard from "./components/OnboardingMessageCard";
import CustomRadioButton from "./components/RadioButton";
import CustomCheckBox from "./components/CustomCheckBox";
import CallIcon from "./assets/icons/icons";
import CustomRadio from "./components/RadioButtonTest";
import CustomCard from "./components/CustomCard";
import { ProgressBar } from "react-native-paper";
import Progressbar from "./components/Progressbar";
import OtpInput from "./components/OtpInput";

export default function App() {
  const [selectedValue, setSelectedValue] = useState(null);
  // Define the options you want to display in the radio button group
  const optionsFace = [
    { label: "Please Blink 2 times", value: "1" },
    { label: "Please Smile", value: "2" },
  ];
  const optionsPass = [
    { label: "At least 8 Characters", value: "1" },
    { label: "1 Upper case & 1 Lower case", value: "2" },
    { label: "1 Special Character", value: "3" },
  ];

  // Handle selection change
  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <ScrollView style={{
      backgroundColor: "#F6F3FE",
    }}>
      <View style={styles.container}>
        <View style={{ marginTop: 40 }}></View>

        <Text>Open up App.js to start working on your app!</Text>
        <View style={{ marginTop: 20 }}></View>
        <HeaderOnboarding />

        <View style={{ marginTop: 20 }}></View>

        <CommonButton RightIcon={true} ButtonStyles={styles.ButtonStyles}>
          Next
        </CommonButton>

        <View style={{ marginTop: 20 }}></View>

        <CommonButton LeftIcon={true} ButtonStyles={styles.ButtonStyles}>
          Previous
        </CommonButton>

        <View style={{ marginTop: 20 }}></View>

        <CommonButton
          LeftIcon={true}
          LeftIconStyles={styles.LeftIconStyles}
          buttonTextStyles={styles.buttonTextStyles}
        >
          Previous
        </CommonButton>

        <View style={{ marginTop: 20 }}></View>

        <CommonButton
          RightIcon={true}
          RightIconStyles={styles.RightIconStyles}
          buttonTextStyles={styles.buttonTextStyles}
        >
          Next
        </CommonButton>

        <PrevNextButton />

        <Text style={commonStyles.subHeaderText}>Input with Icon</Text>
        <OnboardingInput leftIcon="mail" style={{ borderRadius: 8 }} />
        <Text style={commonStyles.subHeaderText}>Information Input</Text>
        <OnboardingInput style={{ borderRadius: 16 }} />
        <Text style={commonStyles.subHeaderText}>Disabled Input</Text>
        <OnboardingInput readOnly style={{ borderRadius: 16 }} />
        <Text style={commonStyles.subHeaderText}>Document Picker</Text>
        <DocumentPicker label="Attach your files here" />

        <DocumentPicker label="Attach your files here" nidPicker />
        <Progressbar
          currentStep={1}
          totalStep={3}
          title="Personal Info"
          nextTitle="Bank Info"
        />
        <Progressbar
          currentStep={2}
          totalStep={3}
          title="Bank Info"
          nextTitle="Nominee Info"
        />
        <Progressbar
          currentStep={3}
          totalStep={3}
          title="Nominee(s) Info"
          nextTitle="Review Info"
        />
        <View style={{ marginTop: 20 }}>
          <OtpInput />
        </View>
      </View>

      <OnboardingMessageCard>
        <CustomRadio options={optionsFace} direction="vertical" />
      </OnboardingMessageCard>

      <OnboardingMessageCard>
        <CustomRadio
          options={optionsPass}
          direction="vertical"
          style={{ borderColor: "#252526", marginRight: 10 }}
          selectedButtStyle={{ backgroundColor: "#0F7C4B" }}
          labelStyle={{ fontSize: 16, color: "#252526" }}
        />
      </OnboardingMessageCard>

      <View style={{ marginTop: 20 }}></View>

      <OnboardingMessageCard
        style={{
          backgroundColor: "#FFFFFF", // Custom background color
          borderWidth: 1,
          borderColor: "#B9B9B9",
        }}
      >
        <Text style={styles.TextStyle}>
          You have a trading account with mobile no. (0185*****10).
        </Text>
        <View style={{ marginTop: 10 }}></View>
        <Text style={styles.TextStyle}>
          Please use this mobile no. or contact your RM.
        </Text>

        <View style={{ marginTop: 10 }}></View>

        <CommonButton
          buttonTextStyles={styles.buttonTextStyles}
          ButtonStyles={{ width: "100%" }}
        >
          {" "}
          Send OTP
        </CommonButton>
        <View style={{ marginTop: 20 }}></View>
        <CommonButton
          icon={<CallIcon />}
          buttonTextStyles={styles.buttonTextStyles}
          ButtonStyles={{ width: "100%" }}
        >
          {" "}
          Call RM
        </CommonButton>
      </OnboardingMessageCard>

      <View style={{ marginTop: 20 }}></View>
      <CustomCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginHorizontal: "auto",
    gap: 10,
  },
  ButtonStyles: {
    backgroundColor: "rgba(204, 10, 19, 0.95)",
    borderColor: "#CC0A13",
  },
  TextStyle: {
    fontFamily: "K2D-Regular",
    fontWeight: "400",
    fontSize: 20,
    lineHeight: 26,
  },
  LeftIconStyles: {
    color: "rgba(204, 10, 19, 1)",
  },
  RightIconStyles: {
    color: "rgba(204, 10, 19, 1)",
  },
  buttonTextStyles: {
    color: "rgba(204, 10, 19, 1)",
  },
});
