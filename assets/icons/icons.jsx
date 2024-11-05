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

export const CallIcon = (props) => (
  <Svg
    width={18}
    height={18}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.95 18C14.8667 18 12.8083 17.546 10.775 16.638C8.74167 15.73 6.89167 14.4423 5.225 12.775C3.55833 11.1077 2.271 9.25767 1.363 7.225C0.455 5.19233 0.000666667 3.134 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0793332 5.725 0.238C5.90833 0.396667 6.01667 0.584 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.704 9.11233 5.162 9.687C5.62 10.2617 6.12433 10.816 6.675 11.35C7.19167 11.8667 7.73333 12.346 8.3 12.788C8.86667 13.23 9.46667 13.634 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1377 17.775 12.313C17.925 12.4883 18 12.684 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2H2.025C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2877 15.4583 13.963 15.625C14.6383 15.7917 15.3173 15.9 16 15.95V13.75L13.65 13.275L11.975 14.95Z"
      fill="#044209"
    />
  </Svg>
);
export default CallIcon;
