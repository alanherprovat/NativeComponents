import React from 'react';
import { Badge } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const BadgeComponent = ({notifyCount=13}) => (
  <View style={styles.container}>
    <Badge 
      visible={true} 
      style={styles.customBadge}
      size={20}
    >
      {notifyCount}
    </Badge>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customBadge: {
    backgroundColor: '#CC0A13',
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    position: 'absolute',
    top: 0,
    right: 0,
    width: 32,
    height: 18,
    paddingVertical: 0,    // Remove vertical padding
    paddingHorizontal: 0,  // Remove horizontal padding
    lineHeight: 18,        // Match this closely with height
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 20,         // Ensure minimum height
    display: 'flex',       // Enable flex properties
  },
});

export default BadgeComponent;