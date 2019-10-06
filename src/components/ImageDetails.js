import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ImageDetail = ({ title, image, score }) => {
  return (
    <View>
      <Image source={image} />
      <Text>
        {title} - Score: {score}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
