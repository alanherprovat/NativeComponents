import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import {
    MarketUpArrow,
  } from "../assets/icons/icons";
import MarketStatus from "../components/MarketStatus";
const { width } = Dimensions.get('window');
const CompactMarketInfo = () => {
 
  const isCompact = width < 350; // Adjust layout for smaller screens

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.titleText}>DSEX</Text>
        <Text style={styles.valueText}>5756.71</Text>
      </View>
      <View style={[styles.row, isCompact && styles.compactRow]}>
        <MarketUpArrow />
        <Text style={styles.valueText}>75.90</Text>
        <Text style={styles.percentageText}>1.70%</Text>
      </View>
      <View style={[styles.marketStatusContainer, isCompact && styles.compactMarketStatus]}>
        <Text style={styles.marketText}>Market:</Text>
        <MarketStatus>Open</MarketStatus>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // padding: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 5,
  },
  valueText: {
    fontSize: 13,
    color: '#000000',
    fontWeight:'600'
  },
  percentageText: {
    fontSize: 13,
    color: '#4CAF50', // Adjust color as needed
    marginLeft: 5,
  },
  marketStatusContainer: {
    flexDirection: 'row',
    backgroundColor: '#DFE9FCA6',
    // paddingVertical: 2,
    // paddingLeft: 6,
    borderRadius: 5,
    justifyContent: 'center',
    width: width>450? width*0.15 :'auto',
    height:'auto',
    gap:5
  },
  marketText: {
    fontWeight:'bold',
    fontSize: 12,
    color: '#000000',
    marginRight: 5,
    marginLeft:5
  },
  compactRow: {
    marginBottom: 2,
  },
  compactMarketStatus: {
    paddingVertical: 1,
    paddingHorizontal: 4,
  },
});

export default CompactMarketInfo;
