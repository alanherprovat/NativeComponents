import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CameraIcon, UploadIcon, ViewIcon } from '../config/SvgIcons'
import { Button } from 'react-native-paper'
const buttonContainer={
  justifyContent:"center",
  alignItems:"center",
  backgroundColor:"#D9D9D9",
  paddingVertical:10,
  paddingHorizontal:10,
}
export default function DocumentPicker(props) {
    const {label,nidPicker} = props
  return (
    <View style={styles.documentContainer}>
      <View
      style={styles.fileUploadContainer}
      >
      {nidPicker?<></>:<Button onPress={()=>console.log("Camera is Clicked!")} style={styles.photoContainer}>
       <CameraIcon/>
     </Button>}
     <Button onPress={()=>console.log("Upload is Clicked!")} style={nidPicker?styles.photoContainer:styles.uploadIconContainer}>
       <UploadIcon/>
     </Button>
      </View>

     <View >
        <Text style={styles.documentLabel}>{label}</Text>
     </View>
     <Button onPress={()=>console.log("View is clicked!")} style={styles.viewIconContainer}>
       <ViewIcon/>
     </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    documentContainer:{
        width:"100%",
        alignItems:"center",
        flexDirection:"row",
        borderWidth:1,
        borderColor:"#98A1B3",
        borderRadius:16,
        justifyContent:"space-between"
        // paddingVertical:4,
        // paddingHorizontal:5
    },
    fileUploadContainer:{
      flexDirection:"row",
      gap:30
    },
    photoContainer:{
      ...buttonContainer,
        borderTopLeftRadius:16,
        borderBottomLeftRadius:16,
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
    },
    uploadIconContainer:{
      ...buttonContainer,

        borderRadius:0
    },
    viewIconContainer:{
       ...buttonContainer,
        borderBottomRightRadius:16,
        borderTopRightRadius:16,
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0
    },
    documentLabel:{
       color:"#5B5C63"
    }
})