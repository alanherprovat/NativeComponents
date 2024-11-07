import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { View, StyleSheet } from "react-native";
import { useCallback, useMemo, useRef, useState } from "react";
import { BlurView } from "expo-blur";
export default function BottomModal({children}) {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["5%", "50%"], []);
  const [isBlurActive, setIsBlurActive] = useState(true);

  const handleSheetChange = useCallback((index) => {
    setIsBlurActive(index!==0)
  }, []);

  return (
    <View style={StyleSheet.absoluteFill}>
      {isBlurActive && <BlurView intensity={50} style={StyleSheet.absoluteFill} tint="dark" />}
    <BottomSheet
      index={1}
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      onChange={handleSheetChange}
      backgroundStyle={styles.bottomSheetContainer}
      enablePanDownToClose={false}
    >
      <BottomSheetView style={styles.contentContainer}>
        {children}
      </BottomSheetView>
    </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheetContainer: {
    borderRadius: 0,
  },
  contentContainer: {
    // flex: 1,
    paddingVertical: 20,
    marginHorizontal: 20,
    gap: 10,
  },
  
});
