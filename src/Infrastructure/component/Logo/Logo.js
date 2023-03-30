import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
// import LOGOSVG from '../../assets/images/splashScreenLogo.svg';
import { scale } from "../../utils/screenUtility";

const Logo = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: scale(5),
      }}
    >
      <Image
        source={require("../../assets/images/ArithaLogo.png")}
        style={{
          width: scale(100),
          height: scale(50),
          resizeMode: "contain",
        }}
      />
      {/* <LOGOSVG      // for SVG 
        width="250px"
        height="55px"
        style={{flex: 1, marginTop: scale(20), right: scale(15)}}
      /> */}
    </View>
  );
};

export default Logo;
