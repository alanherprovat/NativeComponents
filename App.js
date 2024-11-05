import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import CommonButton from './components/CommonButton';
import OnboardingInput from './components/OnboardingInput';
import commonStyles from './assets/Styles/CommonStyles';
import DocumentPicker from './components/DocumentPicker';
import PrevNextButton from './components/PrevNextButton';
import HeaderOnboarding from './components/HeaderOnboarding';

export default function App() {


  return (
    <ScrollView>
        <View style={styles.container}>
        <View style={{marginTop:40}}>
        </View>

        <Text>Open up App.js to start working on your app!</Text>
        <View style={{marginTop:20}}>
        </View>
        <HeaderOnboarding/>

            <View style={{marginTop:20}}>
            </View>

            <CommonButton RightIcon={true} ButtonStyles={styles.ButtonStyles}> 
            Next 
            </CommonButton>

            <View style={{marginTop:20}}>
            </View>

            <CommonButton LeftIcon={true} ButtonStyles={styles.ButtonStyles}> 
            Previous 
            </CommonButton>

            <View style={{marginTop:20}}>
            </View>

            <CommonButton LeftIcon={true}  LeftIconStyles={styles.LeftIconStyles} buttonTextStyles={styles.buttonTextStyles}> 
            Previous 
            </CommonButton>

            <View style={{marginTop:20}}>
            </View>
            
            <CommonButton RightIcon={true}  RightIconStyles={styles.RightIconStyles} buttonTextStyles={styles.buttonTextStyles}> 
            Next 
            </CommonButton>

            <PrevNextButton/>

            <Text style={commonStyles.subHeaderText}>Input with Icon</Text>
            <OnboardingInput leftIcon = "mail" style={{borderRadius:8}}/>
            <Text style={commonStyles.subHeaderText}>Information Input</Text>
            <OnboardingInput style={{borderRadius:16}} />
            <Text style={commonStyles.subHeaderText}>Disabled Input</Text>
            <OnboardingInput readOnly style={{borderRadius:16}}/>
            <Text style={commonStyles.subHeaderText}>Document Picker</Text>
            <DocumentPicker label="Attach your files here"/>
            <View style={{marginTop:20}}>
            </View>
            
        </View> 
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3FE',
    alignItems: 'center',
    justifyContent: 'center',width:"100%",
    marginHorizontal:"auto",
    gap:10
  },
  ButtonStyles:
  { backgroundColor: 'rgba(204, 10, 19, 0.95)',
    borderColor: '#CC0A13',
  },
  LeftIconStyles:
  {
    color: 'rgba(204, 10, 19, 1)'
  },
  RightIconStyles:{
    color: 'rgba(204, 10, 19, 1)'
  },
   buttonTextStyles:{
    color:'rgba(204, 10, 19, 1)'
  }

});
