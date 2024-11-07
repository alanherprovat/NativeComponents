import { StatusBar } from "expo-status-bar";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import CommonButton from "./components/CommonButton";
import OnboardingInput from "./components/OnboardingInput";
import commonStyles from "./assets/Styles/CommonStyles";
import DocumentPicker from "./components/DocumentPicker";
import PrevNextButton from "./components/PrevNextButton";
import HeaderOnboarding from "./components/HeaderOnboarding";
import OnboardingMessageCard from "./components/OnboardingMessageCard";
import MarketStatus from "./components/MarketStatus";
import CustomRadioButton from "./components/RadioButton";
import CustomCheckBox from "./components/CustomCheckBox";
import CompactMarketInfo from "./components/MarketComponent";
import {
  CallIcon,
  BOInfoLogo,
  InfoIcon,
  IDLCIcon,
  ProfileIcon,
  NotifyIcon,
  MarketUpArrow,
  MarketDownArrow,
} from "./assets/icons/icons";
import CustomRadio from "./components/RadioButtonTest";
import CustomCard from "./components/CustomCard";
import { ProgressBar, Text } from "react-native-paper";
import Progressbar from "./components/Progressbar";
import OtpInput from "./components/OtpInput";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ServiceCustomCard from "./components/ServiceCustomCard";
import BottomSheet from "./components/BottomSheet";
import BottomModal from "./components/BottomSheet";
import { BlurView } from "expo-blur";
import { Dimensions } from "react-native";
import HeaderAfterLogin from "./components/HeaderAfterLogin";
import Badge from "./components/Badge";
import ServiceReqCard from "./components/ServiceReqCard";

const { width, height } = Dimensions.get("window");
import BottomSheetElements from "./components/BottomSheetElements";
import BannerComponent from "./components/BannerComponents";
import SliderElements from "./components/SliderElements";
import UploadDocuments from "./components/UploadDocuments";

// import BannerComponent from "./components/BannerComponent";

export default function App() {
  const [selectedValue, setSelectedValue] = useState(null);
  const snapPoint = 2;
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
  const ServiceData1 = {
    Request_Type: "Deposit Request",
    ReqAmount: "100,000",
    currStatus: "Processing",
  };
  const ServiceData2 = {
    Request_Type: "IPO Appication",
    ScriptName:"Orion Pharma Ltd.",
    // ReqAmount: "100,000",
    currStatus: "Processing",
  };
  const ServiceData3 = {
    Request_Type: "Withdrawal Request",
    WithdrawAmount: "100,000",
    currStatus: "Completed",
  };

  // Handle selection change
  const handleSelect = (value) => {
    setSelectedValue(value);
  };
  const [isBottomModalVisible, setBottomModalVisible] = useState(true);

  const closeBottomModal = () => setBottomModalVisible(false);
  return (
    <GestureHandlerRootView style={styles.gestureContainer}>
      <BlurView intensity={50} style={StyleSheet.absoluteFill} />

      <ScrollView
        style={{
          backgroundColor: "#F6F3FE",
        }}
      >
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
            title="Nid Front"
            nextTitle="Nid Back"
            tintColor="#fff"
            backgroundColor="#87080EB0"
          />
          <Progressbar
            currentStep={1}
            totalStep={3}
            title="Personal Info"
            nextTitle="Bank Info"
            tintColor="#169F61"
            backgroundColor="#fff"
          />
          <Progressbar
            currentStep={2}
            totalStep={3}
            title="Bank Info"
            nextTitle="Nominee Info"
            tintColor="#169F61"
            backgroundColor="#fff"
          />
          <Progressbar
            currentStep={3}
            totalStep={3}
            title="Nominee(s) Info"
            nextTitle="Review Info"
            tintColor="#169F61"
            backgroundColor="#fff"
          />
          <View style={{ marginTop: 20 }}>
            <OtpInput />
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

          <CustomCard style={{ height: 448 }}>
            <BOInfoLogo />

            <View style={{ marginTop: 20 }}></View>

            <Text style={styles.TextStyle}>BO Account Information </Text>
            <Text style={{ color: "rgba(131, 120, 120, 1)", lineHeight: 26 }}>
              Please select what type of BO Account you want to open
            </Text>

            <View style={{ marginTop: 20 }}></View>
            <CommonButton
              ButtonStyles={{
                backgroundColor: "rgba(255, 231, 229, 1)",
                width: "45%",
                height: "20%",
              }}
              buttonTextStyles={{ color: "rgba(0, 0, 0, 1)" }}
            >
              New BO
            </CommonButton>
            <CommonButton
              ButtonStyles={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                width: "45%",
                height: "20%",
                marginVertical: 10,
                borderColor: "rgba(181, 181, 181, 1)",
              }}
              buttonTextStyles={{ color: "rgba(92, 84, 84, 1)" }}
            >
              Link BO
            </CommonButton>
          </CustomCard>

          <View style={{ marginTop: 20 }}></View>

          <CommonButton
            icon={InfoIcon}
            disabled={true}
            buttonTextStyles={{
              fontSize: 15,
              color: "rgba(0, 32, 105, 1)",
              lineHeight: 14,
            }}
            ButtonStyles={{
              alignItems: "flex-start",
              borderColor: "rgba(76, 108, 181, 1)",
              borderRadius: 20,
            }}
          >
            Tk 500 fee for account opening will be payable upon completing all
            steps.
          </CommonButton>

          <View style={{ marginTop: 20 }}></View>

          <CustomCard style={{ borderColor: "#98A1B3" }}>
            <View style={styles.containerText}>
              <View style={styles.section}>
                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Applicant's Name</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>Abdul Salam</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Father's Name</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>Abdul Kalam</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Mother's Name</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>Rasheda Salam</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>NID Number</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>1234567899</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Mobile Number</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>01996194878</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Gender</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>Male</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Occupation</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>Doctor</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Email</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>alanherprovat3@gmail.com</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Present Address</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>Paltan VIP Road</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>BO</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>Single</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>BO ID</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>1234567812345678</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Signature</Text>
                  </View>
                  <Text style={styles.colon}>:</Text>
                  <View style={styles.labelContainer}>
                    <Text style={styles.value}>............</Text>
                  </View>
                </View>

                <View style={styles.row}>
                  <View style={styles.documentHeader}>
                    <View style={styles.underlineWrapper}>
                      <Text style={styles.documentTitle}>
                        Uploaded Documents
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </CustomCard>

          <View style={{ marginTop: 20 }}></View>

          <ServiceCustomCard />

          <View style={{ marginTop: 20 }}></View>

          <HeaderAfterLogin>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IDLCIcon />
              <CompactMarketInfo />
              <View style={{ flexDirection: "row", gap: 5 }}>
                <NotifyIcon />
                <Badge />
                <ProfileIcon />
              </View>
            </View>
          </HeaderAfterLogin>

          <View style={{ marginTop: 20 }}></View>
           <SliderElements/> 
          <BannerComponent />
          <UploadDocuments documentName="NID.png"/>
          <ServiceReqCard data={ServiceData1}/>
          <ServiceReqCard data={ServiceData2}/>
          <ServiceReqCard data={ServiceData3}/>
           
          <View style={{ marginTop: 90 }}></View>
        </View>
      </ScrollView>

      {/* <BottomSheetElements /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
    backgroundColor: "#000000",
  },
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
    // fontFamily: "K2D-Regular",
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

  containerText: {
    flex: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  section: {
    gap: 8,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 4,
    gap: 8,
  },
  labelContainer: {
    flexDirection: "row",
    minWidth: width * 0.3,
    maxWidth: "50%",
  },
  label: {
    fontSize: width > 481 ? 18 : 14,
    color: "#333",
    fontWeight: "bold",
    flexShrink: 1,
  },
  colon: {
    paddingHorizontal: 4,
    color: "#333",
  },
  value: {
    // flex: 1,
    fontSize: width > 481 ? 18 : 14,
    color: "#333",
    flexWrap: "wrap",
  },
  documentHeader: {
    marginTop: 16,
  },
  underlineWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: "#000000",
    paddingBottom: 8,
  },
  documentTitle: {
    fontSize: width > 481 ? 20 : 18,
    fontWeight: "bold",
    color: "#000000",
  },
});
