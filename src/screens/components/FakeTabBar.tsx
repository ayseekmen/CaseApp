import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import Fonts from "../../theme/Fonts";
import { getRH, getRW } from "../../theme/Units";
import Home from "../../assets/svgs/home.svg";
import Diagnose from "../../assets/svgs/diagnose.svg";
import MyGarden from "../../assets/svgs/my-garden.svg";
import Profile from "../../assets/svgs/profile.svg";
import Scan from "../../assets/svgs/scan.svg";


const FakeTabBar = () => {

    return (
        <View style={styles.fakeTabBar}>
            <View style={styles.tabBarButton}>
                <View style={styles.tabBarButtonIcon}>
                    <Home height="100%" width="100%" />
                </View>
                <Text style={styles.tabBarButtonText} >
                    Home
                </Text>
            </View>
            <View style={styles.tabBarButton}>
                <View style={styles.tabBarButtonIcon}>
                    <Diagnose height="100%" width="100%" />
                </View>
                <Text style={styles.tabBarButtonText} >
                    Diagnose
                </Text>
            </View>
            <View style={styles.tabBarScanButtonArea}>
            </View>
            <View style={styles.tabBarScanButton}>
                <Scan height="100%" width="100%" />
            </View>
            <View style={styles.tabBarButton}>
                <View style={styles.tabBarButtonIcon}>
                    <MyGarden height="100%" width="100%" />
                </View>
                <Text style={styles.tabBarButtonText} >
                    My Garden
                </Text>
            </View>
            <View style={styles.tabBarButton}>
                <View style={styles.tabBarButtonIcon}>
                    <Profile height="100%" width="100%" />
                </View>
                <Text style={styles.tabBarButtonText} >
                    Profile
                </Text>
            </View>
        </View>
    );
}

export default FakeTabBar;

const styles = StyleSheet.create({
    fakeTabBar: {
        height: getRH(84),
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        backgroundColor:"white",
        borderTopWidth: getRH(0.5),
        borderColor: "#E4E5E4",
        paddingTop: getRH(6)
    },
    tabBarButton: {
        height: getRH(49),
        width: getRW(74),
        justifyContent: "center",
        alignItems: "center"
    },
    tabBarButtonIcon: {
        height: getRH(25),
        width: getRW(25),
    },
    tabBarButtonText: {
        fontSize: Fonts.size(10),
        color: '#979798',
        fontFamily: Fonts.type.regular,
        marginTop: getRH(4),
    },
    tabBarScanButtonArea: {
        height: getRH(64),
        width: getRW(74),
    },
    tabBarScanButton: {
        height: getRH(64),
        width: getRW(74),
        position:"absolute",
        left: getRW(152),
        top: -getRH(20)
    },
})
