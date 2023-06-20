import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import colors from "../../../Infrastructure/assets/colors/colors";

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
          <Text>Welcome !!!</Text>
          <Text>Happy to see you.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TimeLine;
