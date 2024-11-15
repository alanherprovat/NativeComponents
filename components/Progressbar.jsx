import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export default function Progressbar(props) {
  const {currentStep,totalStep,title,nextTitle,tintColor,backgroundColor} = props;
  const stepsComplete = Number(currentStep)/Number(totalStep);
  return (
    <View style={styles.progressbarContainer}>
      <AnimatedCircularProgress
        size={83}
        width={10}  
        fill={stepsComplete*100}
        tintColor={tintColor}
        backgroundColor={backgroundColor}
        style={styles.circularProgress}
      >
        {(fill) => (
          <View style={styles.progressTextContainer}>
            <Text style={styles.progressText}>{currentStep} of {totalStep}</Text>
          </View>
        )}
      </AnimatedCircularProgress>
      <View style={styles.stepsDescription}>
       <Text style={{...styles.descriptionText,fontSize:20,fontWeight:"bold"}}>{title}</Text>
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
    width: 100,
    height: 100,
    borderRadius: 50,
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
