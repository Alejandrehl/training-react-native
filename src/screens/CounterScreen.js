import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  return (
    <View>
      <Text>Counter Screen</Text>
      <Text>Current Count:</Text>
      <Button title="Counter Button" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
