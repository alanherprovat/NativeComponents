import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NextButton from './components/NextButton';
import OnboardingInput from './components/OnboardingInput';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <NextButton/>
      <OnboardingInput leftIcon = "mail" style={{borderRadius:8}}/>
      <OnboardingInput style={{borderRadius:16}} />
      <OnboardingInput readOnly style={{borderRadius:16}}/>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
    width:"90%",
    marginHorizontal:"auto"
  },
});
