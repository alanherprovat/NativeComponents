import { StyleSheet, Text, View } from 'react-native'
import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

export const SaveAndExitIcon = (props) => {
  return (
    <Svg
    width={52}
    height={52}
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={26} cy={26} r={25.5} fill="white" stroke="black" />
    <Path
      d="M24 25V22L29 26L24 30V27H15V25H24ZM16.458 29H18.582C19.28 30.7191 20.5537 32.1422 22.1851 33.0259C23.8165 33.9097 25.7043 34.1991 27.5255 33.8447C29.3468 33.4904 30.9883 32.5142 32.1693 31.0832C33.3503 29.6523 33.9975 27.8554 34 26C34.001 24.1427 33.3558 22.3428 32.1749 20.9092C30.994 19.4756 29.3511 18.4976 27.528 18.1428C25.7048 17.7881 23.815 18.0787 22.1828 18.965C20.5505 19.8512 19.2775 21.2778 18.582 23H16.458C17.732 18.943 21.522 16 26 16C31.523 16 36 20.477 36 26C36 31.523 31.523 36 26 36C21.522 36 17.732 33.057 16.458 29Z"
      fill="black"
    />
  </Svg>
  )
}
