import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CommonButton({mode,onPress,icon,children,RightIcon,LeftIcon,ButtonStyles,LeftIconStyles,RightIconStyles,buttonTextStyles}) {
  return (
    <Button
    //   mode="contained-tonal" 
      onPress={() => console.log('Pressed')}
      style={[styles.button,ButtonStyles]}
     // labelStyle={styles.buttonLabel}
    >
      <View style={styles.content}>
        {LeftIcon &&(
          <Icon name="arrow-back-outline" style={[styles.LeftIcon,LeftIconStyles]} />
        )}
        
        {icon && icon}

        <Text style={[styles.buttonText,buttonTextStyles]}>{children}</Text>
        {RightIcon &&(
          <Icon name="arrow-forward-outline" style={[styles.Righticon,RightIconStyles]} />
        )}
      </View>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    // alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor:'rgba(204, 10, 19, 1)',
    width: '90%',
    height: 50,
  },
  buttonLabel: {
    color: 'transparent', // Hide label since we're using a custom View for alignment
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%'
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 20,
    fontWeight: '400',
    // fontFamily: 'K2D-Regular',
  },
  Righticon: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 24,
    marginLeft: 8, // Space between text and icon
  },
  LeftIcon:{
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 24,
    marginRight: 8, // Space between text and icon
  },
});
