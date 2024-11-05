import React,{useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Check from 'react-native-vector-icons/Ionicons';

const CustomRadio = ({ 
  options = [], 
  style,
  labelStyle,
  selectedButtStyle, 
  direction = 'vertical',
  disabled = false,
  label,
}) => {

  const [selectedValue, setSelectedValue] = useState(null);

   // Handle selection change
   const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[
        styles.radioGroup,
        direction === 'horizontal' && styles.horizontal
      ]}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value} 
            style={[
              styles.radioItem,
              direction === 'horizontal' && styles.horizontalItem
            ]}
            onPress={() => !disabled && handleSelect(option.value)}
            disabled={disabled}
          >
            <View style={[
              styles.radioButton,
              style,
              selectedValue === option.value && [styles.radioButtonSelected,selectedButtStyle],
              disabled && styles.radioButtonDisabled,
            ]}>
              {selectedValue === option.value && (
                <Check name='checkmark-sharp' size={15} color="white"/>
              )}
            </View>
            <Text 
              style={[
                styles.radioLabel,
                labelStyle,
                disabled && styles.disabledText,
                selectedValue === option.value && styles.selectedText
              ]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  radioGroup: {
    gap: 12,
  },
  horizontal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  horizontalItem: {
    marginRight: 16,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#CC0A13',  // Circle border color
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#ffffff",
    marginRight: 30, 
    marginHorizontal:10
  },
  radioButtonSelected: {
    backgroundColor: '#CC0A13',  // Background color when selected
    borderWidth:0
  },
  radioButtonDisabled: {
    opacity: 0.5,  // Lighter color when disabled
  },
  radioLabel: {
    fontFamily:'K2D-Regular',
    fontSize: 20,
    fontWeight:'400',
    marginLeft: 8,
    color: '#CC0A13',
  },
  selectedText: {
    color: '#0F7C4B',
  },
  disabledText: {
    opacity: 0.5,
  },
});

export default CustomRadio;
