import { BottomSheet } from '@gorhom/bottom-sheet';
import { View, Text } from 'react-native';
import { useCallback, useRef } from 'react';

export default function BottomSheet() {
  const bottomSheetRef = useRef(null);
  const snapPoints = ['25%', '50%', '75%'];

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
      >
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text>Bottom Sheet Content</Text>
        </View>
      </BottomSheet>
    </View>
  );
}