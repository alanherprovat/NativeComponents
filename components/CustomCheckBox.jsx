import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Checkbox, Text } from 'react-native-paper';

export default  CustomCheckbox = ({ 
  options = [
    { value: 'first', label: 'First' },
    { value: 'second', label: 'Second' }
  ],
  initialValue = [],
  onChange,
  color = '#CC0A13',
  containerStyle,
  labelStyle,
  multiple = false
}) => {
  const [selectedValues, setSelectedValues] = React.useState(
    Array.isArray(initialValue) ? initialValue : [initialValue]
  );

  const handleChange = (value) => {
    let newValues;
    if (multiple) {
      newValues = selectedValues.includes(value)
        ? selectedValues.filter(v => v !== value)
        : [...selectedValues, value];
    } else {
      newValues = [value];
    }
    setSelectedValues(newValues);
    onChange?.(multiple ? newValues : newValues[0]);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.checkboxContainer}>
        {options.map((option) => (
          <View key={option.value} style={styles.rowStyle}>
           
                <Checkbox.Android
                status={selectedValues.includes(option.value) ? 'checked' : 'unchecked'}
                onPress={() => handleChange(option.value)}
                color={color}
                uncheckedColor={color}
                style={styles.checkbox}
                />
            
            <Text 
              style={[styles.checkboxLabel, labelStyle]}
              onPress={() => handleChange(option.value)}
            >
              {option.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    checkboxContainer: {
      flexDirection: 'column',
      gap: 16,
      
    },
    rowStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      minWidth: 100,
    },
    checkbox: {
      borderRadius: 10, // Makes the checkbox circular
      backgroundColor:"#ffffff"
    },
    checkboxLabel: {
      fontFamily: "K2D-Regular",
      fontWeight: '400',
      fontSize: 20,
      color: '#CC0A13',
      marginLeft: 8,
    },
  });