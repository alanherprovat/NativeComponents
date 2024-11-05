import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import CommonButton from './components/CommonButton';
import PrevNextButton from './components/PrevNextButton';
import HeaderOnboarding from './components/HeaderOnboarding';


export default function App() {

  const bottomSheetRef = useRef(null);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);


  return (
   
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

            <CommonButton LeftIcon={true} ButtonStyles={styles.ButtonStyles}
            > 
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

            <View style={{marginTop:20}}>
            </View>
            <PrevNextButton>
              Hello
            </PrevNextButton>
        </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F3FE',
    alignItems: 'center',
    justifyContent: 'center',
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
