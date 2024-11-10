import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import AutoSlider from "./Marquee";
import StockMarketJson from "../config/StockMarket.json";
import { IndicatorDownIcon, IndicatorUpIcon } from "../assets/icons/icons";
import { Marquee } from "@animatereactnative/marquee";

export default function MarqueeComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(StockMarketJson);
  }, []);

  return (
    <View style={styles.container}>
      <Marquee spacing={20} speed={0.4}>
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
              <Text style={{...styles.text,textAlign:"center"}}>{item.last_trading_price}</Text>
              <Text style={{...styles.text,textAlign:"center"}}>{item.change_percent}</Text>
            </View>
            </View>

          ))}
        </ScrollView>
      </Marquee>
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
    gap:16,
    flexDirection: "row",
    alignItems: "center",
  },
  singleItemContainer:{
    flexDirection:"row",
    gap:3
  },
  percentageContainer:{
    flexDirection:"row",
    gap:3,
    alignItems:"center",
    // justifyContent:"center"
  },
  text: {
    // textAlign:"center",
    fontSize: 12,
    fontWeight:"600"
  },
});
