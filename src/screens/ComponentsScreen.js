import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const { textStyle } = styles;
  const greeting = "Hi there!";
  const goodbye = <Text>Good bye!</Text>;

  return (
    <View>
      <Text style={textStyle}>This is the Components Screen</Text>
      <Text>{greeting}</Text>
      {goodbye}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
