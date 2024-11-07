import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DocumentIcon } from '../assets/icons/icons'
import { TouchableOpacity } from 'react-native'

export default function UploadDocuments(props) {
    const {documentName} = props;
  return (
    <TouchableOpacity style={styles.documentContainer}>
        <DocumentIcon/>
        <Text>{documentName}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    documentContainer:{
        width:"90%",
        gap:10,
        flexDirection:"row",
        paddingHorizontal:10,
        paddingVertical:20,
        backgroundColor:"#FFFFFFD9",
        borderColor:"#11AF22",
        borderWidth:1,
        alignItems:"center",
        borderRadius:8
    }
})