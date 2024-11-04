import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CommonButton from './components/CommonButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={{marginTop:20}}>
      </View>
      <StatusBar style="auto" />
      
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

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
