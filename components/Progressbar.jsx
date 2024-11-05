import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function Progressbar(props) {
  const {currentStep,totalStep,title,nextTitle} = props;
  const stepsComplete = Number(currentStep)/Number(totalStep);
  console.log(stepsComplete)
  return (
    <View style={styles.progressbarContainer}>
      <AnimatedCircularProgress
        size={83}
        width={10}  
        fill={stepsComplete*100}
        tintColor="#169F61"
        backgroundColor="#fff"
        style={styles.circularProgress}
      >
        {(fill) => (
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressText}>{currentStep} of {totalStep}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <View style={styles.stepsDescription}>
       <Text style={{...styles.descriptionText,fontSize:18,fontWeight:"bold"}}>{title}</Text>
       <Text style={{...styles.descriptionText,fontSize:14}}> Next : {nextTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressbarContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ED1C24",
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
  },
  circularProgress: {
    transform: [{ rotate: '-90deg' }],
  },
  progressTextContainer: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#CC0A13",
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    transform: [{ rotate: '90deg' }],
  },
  stepsDescription:{
    gap:4,
    alignItems:"flex-end",
    // justifyContent:"flex-end"
  },
  descriptionText:{
    color:"#fff"
  }
});
