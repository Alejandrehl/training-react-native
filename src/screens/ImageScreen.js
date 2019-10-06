import React from "react";
import { View, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetails";
import BeachImage from "../../assets/images/beach.jpg";
import ForestImage from "../../assets/images/forest.jpg";
import MountainImage from "../../assets/images/mountain.jpg";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" image={BeachImage} />
      <ImageDetail title="Beach" image={ForestImage} />
      <ImageDetail title="Mountain" image={MountainImage} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
