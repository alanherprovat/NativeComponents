import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

export default function NextButton() {
  return (
    <Button mode="contained" onPress={() => console.log('Pressed')}>
     Press me
    </Button>
  )
}

const styles = StyleSheet.create({})