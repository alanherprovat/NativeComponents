import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AutoSlider from "./Marquee";
import StockMarketJson from "../config/StockMarket.json";
import { IndicatorDownIcon, IndicatorUpIcon } from "../assets/icons/icons";

export default function SliderElements() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(StockMarketJson);
  }, []);

  return (
    <View style={styles.container}>
      <AutoSlider>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentContainer}
        >
          {data.map((item, index) => (
            <View key={index} style={styles.singleItemContainer}>
            <View>
              <Text style={styles.text}>{item.trading_code}</Text>
              <View
              style={styles.percentageContainer}
              >
                {item.indicator==="Down"?<IndicatorDownIcon/>:<IndicatorUpIcon/>}
             <Text style={styles.text}>{item.change}</Text>
              </View>
            </View>
            <View >
              <Text style={styles.text}>{item.last_trading_price}</Text>
              <Text style={styles.text}>{item.change_percent}</Text>
            </View>
            </View>

          ))}
        </ScrollView>
      </AutoSlider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFFD9",
    paddingVertical: 20,
    justifyContent: "center",
    borderWidth:1,
    borderColor:"#526D8280"
  },
  contentContainer: {
    gap:14,
    flexDirection: "row",
    alignItems: "center",
  },
  singleItemContainer:{
    flexDirection:"row",
    gap:4
  },
  percentageContainer:{
    flexDirection:"row",
    gap:3,
    alignItems:"center",
    // justifyContent:"center"
  },
  text: {
    textAlign:"center",
    fontSize: 14,
    fontWeight:"500"
  },
});
