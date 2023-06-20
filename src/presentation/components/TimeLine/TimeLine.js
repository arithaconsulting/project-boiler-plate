import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import colors from "../../../Infrastructure/assets/colors/colors";
import { scale } from "../../../Infrastructure/utils/screenUtility";

const TimeLine = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.White }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: scale(16),
              fontFamily: "SourceSansPro-Regular",
              color: colors.customBlack,
            }}
          >
            Welcome !!!
          </Text>
          <Text
            style={{
              fontSize: scale(16),
              fontFamily: "SourceSansPro-Regular",
              color: colors.customBlack,
            }}
          >
            To React Native Boiler Plate.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TimeLine;
