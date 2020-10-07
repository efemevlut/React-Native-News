import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';



const App = () => {
  return (
    <ScrollView>

        <View style={styles.header}>
          <Text style={styles.headerText}>NEWS</Text>
          <Image style={styles.toggle} source={require("./src/img/toggle.png")}/>
        </View>
        <View style={styles.header2}>
          <Text style={styles.header2Text}>Latest Stories</Text>
          <Text style={styles.header2Text}>Most Read</Text>
        </View>
        <View style={styles.news1}>
          <Image style={styles.img1} source={require("./src/img/news1.jpg")}/>
          <Text  style={styles.textBold}>Mike Pence: The rare times he made headlines</Text>
          <Text>In picking veteran politician Mike Pence as his vice-president in 2016, Donald Trump went with a safe choice that would also help secure him the evangelical Christian vote.</Text>
        </View>
        <View style={styles.news1}>
          <Image style={styles.img1} source={require("./src/img/news2.jpg")}/>
          <Text  style={styles.textBold}>Coronavirus: Health experts join global anti-lockdown movement</Text>
          <Text>Thousands of scientists and health experts have joined a global movement warning of "grave concerns" about Covid-19 lockdown policies.Nearly 6,000 experts, including dozens from the UK, say the approach is having a devastating impact on physical and mental health as well as society.</Text>
        </View>
        <View style={styles.news1}>
          <Image style={styles.img1} source={require("./src/img/news3.jpg")}/>
          <Text  style={styles.textBold}>'Surprise' orangutan born at Chester Zoo after negative pregnancy tests</Text>
          <Text>A Bornean orangutan has been born "by surprise" at a zoo, months after its mother's pregnancy tests all came back negative.Chester Zoo keeper Chris Yarwood said the ape's "wonderful" arrival had come after multiple tests on its mother Leia failed to spot the pregnancy.</Text>
        </View>

    </ScrollView>    
  )
};

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
    color: "white",
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
  news1: {
    height: 400,
    padding: 20,
    display: "flex"
  } ,
  img1: {
    width: 320,
    height: 200,
  },
  textBold: {
    fontWeight: "bold",
    fontSize: 20,
  }
})
  

export default App;
