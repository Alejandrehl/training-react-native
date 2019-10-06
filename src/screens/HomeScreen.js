import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const { text } = styles;
  const { navigate } = navigation;

  return (
    <View>
      <Text style={text}>HomeScreen</Text>
      <Button
        title="Go To Components Demo"
        onPress={() => navigate("Exercise")}
      />
      <Button title="Go To List" onPress={() => navigate("List")} />
      <Button title="Go To Images" onPress={() => navigate("Images")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
