import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { SaveAndExitIcon } from '../assets/icons/icons';

const HeaderOnboarding = () => (
  <View style={styles.container}>
    <Button
      onPress={() => console.log("Back button Pressed")}
      contentStyle={styles.iconButtonContent} // Align icon in button
    >
      <Icon name="arrow-back-outline" style={styles.icon} />
    </Button>

    <Button
      onPress={() => console.log("Save&Exit button Pressed")}
      contentStyle={styles.iconButtonContent} // Align icon in button
    >
      <SaveAndExitIcon style={styles.icon} />
    </Button>
  </View>
);

export default HeaderOnboarding;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16, // Add padding to the sides
    height: 75 ,           
  },
  iconButtonContent: {
    alignItems: 'center',
    justifyContent:'center'
  },
  icon: {
    color: "#000000",
    fontSize: 24,
  },
});
