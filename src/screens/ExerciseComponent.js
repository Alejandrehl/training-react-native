// 1. Show two text elements
// 2. The first should say "Getting started with React Native!" and have a font size of 45
// 3. The second should say "My name is <Your name>" and have font size 20
// 4. For the second text element, assign your name to a variable then print it up in the JSX element

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExerciseComponent = () => {
    const { firstTextStyle, secondTextStyle } = styles;
    const myName = "Alejandro";
    const secondText = `My name is ${myName}`;

    return (
        <View>
            <Text style={firstTextStyle}>Getting started with React Native!</Text>
            <Text style={secondTextStyle}>{secondText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    firstTextStyle: {
        fontSize: 45
    },
    secondTextStyle: {
        fontSize: 20
    }
});

export default ExerciseComponent;