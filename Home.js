  
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

render() {
    return (
       <View style={StyleSheet.container}>
           <SafeAreaView style={StyleSheet.droidSafeArea}
           <ImageBackground source={require('../assests/stars.gif')} style {style.backgroundImage}>
           <View style={styles.titleBar}>
               <Text style={styles.titleText}>Stellar App</Text>
           </View>
           <TouchableOpacity style={styles.routeCard} onPress={() =>
                his.props.navigation.navigate("SpaceCrafts")
           }>
               <Text style={styles.routeText}>Space crafts</Text>
               <Text style={styles.knowMore}>{"Know More --->"}</Text>
               <Text style={styles.bgDigit}>1</Text>
               <Image source={require("../assests/spacecraft.png")}>style={styles.iconImage}</Image>
           </TouchableOpacity>
           <TouchableOpacity style={styles.routeCard} onPress={() =>
            this.props.navigation.navigate("StarMap")
        }>
          <Text style={styles.routeText}>Star Map</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source={require("../assets/star_map.png")} style={styles.iconImage}></Image>
                        <TouchableOpacity style={styles.routeCard} onPress={() =>
            this.props.navigation.navigate("DailyPics")
                        }>
<Text style={styles.routeText}>Daily Pic</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}>3</Text>
                        <Image source={require("../assets/DailyPic.js")} style={styles.iconImage}></Image>
                </TouchableOpacity>
            </TouchableOpacity>
            </ImageBackground>
       </View>
       
    
    );
}