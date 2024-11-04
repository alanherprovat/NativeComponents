import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CameraIcon, UploadIcon, ViewIcon } from '../config/SvgIcons'

export default function DocumentPicker(props) {
    const {label} = props
  return (
    <View style={styles.documentContainer}>
     <TouchableOpacity style={styles.photoContainer}>
       <CameraIcon/>
     </TouchableOpacity>
     <TouchableOpacity style={styles.uploadIconContainer}>
       <UploadIcon/>
     </TouchableOpacity>
     <View >
        <Text style={styles.documentLabel}>{label}</Text>
     </View>
     <TouchableOpacity style={styles.viewIconContainer}>
       <ViewIcon/>
     </TouchableOpacity>
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
    photoContainer:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#D9D9D9",
        paddingVertical:20,
        paddingHorizontal:20,
        borderTopLeftRadius:16,
        borderBottomLeftRadius:16
    },
    uploadIconContainer:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#D9D9D9",
        paddingVertical:20,
        paddingHorizontal:20,
    },
    viewIconContainer:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#D9D9D9",
        paddingVertical:20,
        paddingHorizontal:20,
        borderBottomRightRadius:16,
        borderTopRightRadius:16
    },
    documentLabel:{
       color:"#5B5C63"
    }
})