import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Marquee } from '@animatereactnative/marquee';
export default function AutoSlider({children}) {
  return (
    <Marquee spacing={20} speed={0.4}>
      {children}
    </Marquee>

  )
}

const styles = StyleSheet.create({})