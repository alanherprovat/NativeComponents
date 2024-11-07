import React, { useState } from "react";
import { Image, StyleSheet, View, Dimensions } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const { width } = Dimensions.get("window");

export default function BannerComponent() {
    const [activeIndex, setActiveIndex] = useState(0);
  const bannerImages = [
    { bannerimg: require("../assets/images/s3.jpg") },
    { bannerimg: require("../assets/images/s1.jpg") },
    { bannerimg: require("../assets/images/s2.jpg") },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.imageWrapper}>
<Image source={item.bannerimg} style={styles.image} />
    </View>
    
  );
  const renderCustomPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {bannerImages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <SwiperFlatList
          autoplay
          autoplayDelay={3}
          autoplayLoop
          index={2}
        //   showPagination={true}
          paginationStyleItem={{ ...styles.paginationItem }}
          data={bannerImages}
          renderItem={renderItem}
          onChangeIndex={({ index }) => setActiveIndex(index)}
        />
        {renderCustomPagination()}
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  //  height:500
  },
  innerContainer: {
    width:"100%",
    backgroundColor: "#FFFFFFD9",
    justifyContent: "flex-end"
  },
  imageWrapper:{
    width: width,
    height:200
  },
  image:{
    width:"100%",
    height:"100%",
    resizeMode: "contain",

  },
  paginationContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#ED1C24", 
    width: 10,
    height: 10,
    borderRadius: 6,
  },
  inactiveDot: {
    width: 10,
    height: 10,
    backgroundColor: "transparent", 
    borderColor:"#ED1C24",
    borderWidth:1,
    borderRadius:6
  },
});
