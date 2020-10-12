import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'

const NewsCard = ({news}) => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri:news.imageUrl}} 
            />
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.desc}>{news.description}</Text>
        </View>
    )
}

export {NewsCard};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#e0e0e0",
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    image: {
        height: Dimensions.get("window").height * 0.25,
        borderRadius: 5,
    }
})