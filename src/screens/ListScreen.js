import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const { textStyle } = styles;
    const friends = [
        { id: "1", name: "Hao", age: 19 },
        { id: "2", name: "Grace", age: 20 },
        { id: "3", name: "Shirley", age: 20 },
        { id: "4", name: "Diana", age: 29 },
        { id: "5", name: "Karim", age: 23 },
        { id: "6", name: "Jennifer", age: 20 },
        { id: "7", name: "Bell", age: 26 },
        { id: "8", name: "Lauryn", age: 20 },
        { id: "9", name: "Ricardo", age: 21 },
        { id: "10", name: "Edwin", age: 20 },
        { id: "11", name: "Jeremy", age: 20 }
        ];

    return (
        <View>
            <Text>List Screen</Text>
            <FlatList
                data={friends}
                keyExtractor={ item => item.id }
                renderItem={ ({item}) => {
                    return (
                        <View>
                            <Text style={textStyle}>{item.name} - Age {item.age}</Text>
                        </View>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;