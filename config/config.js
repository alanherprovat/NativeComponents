import { Dimensions } from "react-native"

const {width} = Dimensions.get("window");
export const isTablet = width>=768;
// export const bannerImages=[
//     {
//         bannerimg:S1
//     },
//     {
//         bannerimg:S2
//     },
//     {
//         bannerimg:S3
//     },
// ]