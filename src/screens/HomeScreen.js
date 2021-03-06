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
      <Button title="Go To Counter" onPress={() => navigate("Counter")} />
      <Button title="Go To Colors" onPress={() => navigate("Colors")} />
      <Button title="Go To Square" onPress={() => navigate("Square")} />
      <Button title="Go To Box" onPress={() => navigate("Box")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
