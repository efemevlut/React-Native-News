import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native'


const Header = () => {
    return (
        <SafeAreaView>

            <View style={styles.header}>
                <Text style={styles.headerText}>NEWS</Text>
                <Image style={styles.toggle} source={require("../assets/toggle.png")}/>
            </View>
            <View style={styles.header2}>
                <Text style={styles.header2Text}>Latest Stories</Text>
                <Text style={styles.header2Text}>Most Read</Text>
            </View>    

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: "#B80000",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      height: 60,
      paddingLeft: 10,  
      paddingRight: 10,  
    },
    toggle: {
      width: 40,
      height: 35,
    },
    headerText: {
      color: "white",
      fontSize: 30,
      fontWeight: "900",
    },
    header2: {
      flexDirection: "row",
      backgroundColor: "#B80000",
      justifyContent: "space-between",
      height: 35,
    },
    header2Text:{
      flex: 1,
      textAlign: "center",
      color: "white",
      fontSize: 20,
      backgroundColor: "#931a25",
      paddingTop: 2,
      textDecorationLine: "underline"
    },
})

export {Header};