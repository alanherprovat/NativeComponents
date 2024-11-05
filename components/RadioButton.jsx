import * as React from 'react';
import { View,StyleSheet } from 'react-native';
import { RadioButton,Checkbox, Text } from 'react-native-paper';

const CustomRadioButton = ({ 
    options = [
      { value: 'first', label: 'First' },
      { value: 'second', label: 'Second' }
    ],
    initialValue = 'first',
    onChange,
    color = '#CC0A13', 
    containerStyle,
    labelStyle,
  }) => {
    const [value, setValue] = React.useState(initialValue);
  
    const handleChange = (newValue) => {
      setValue(newValue);
      onChange?.(newValue);
    };
  
    return (
      <View style={[styles.container, containerStyle]}>
        <RadioButton.Group 
          onValueChange={handleChange} 
          value={value}
        >
          <View style={styles.radioContainer}>
            {options.map((option) => (
              <View key={option.value} style={styles.rowStyle}>
                <RadioButton.Android 
                  value={option.value}
                  color={color}
                  uncheckedColor="#CC0A13"
                />
                <Text style={[styles.radioLabel, labelStyle]}>
                  {option.label}
                </Text>
              </View>
            ))}
          </View>
        </RadioButton.Group>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    radioContainer: {
      flexDirection: 'col',
      flexWrap: 'wrap',
      gap: 0, // Space between radio buttons
      alignItems: 'center',
    },
    rowStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      minWidth: 100, // Ensure minimum width for each option
    },
    radioLabel: {
      // fontFamily:"K2D-Regular",
      fontWeight:400,
      fontSize: 20,
      color:'#CC0A13'
    },
  });

export default CustomRadioButton;