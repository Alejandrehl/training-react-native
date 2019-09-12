import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { id: "1", name: "Hao" },
        { id: "2", name: "Grace" },
        { id: "3", name: "Shirley" },
        { id: "4", name: "Diana" },
        { id: "5", name: "Karim" },
        { id: "6", name: "Jennifer" },
        { id: "7", name: "Bell" },
        { id: "8", name: "Lauryn" },
        { id: "9", name: "Ricardo" },
        { id: "10", name: "Edwin" },
        { id: "11", name: "Jeremy" }
        ];

    return (
        <View>
            <Text>List Screen</Text>
            <FlatList
                data={friends}
                keyExtractor={ item => item.id }
                renderItem={ ({item}) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ListScreen;