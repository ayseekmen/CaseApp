import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    View,
    SafeAreaView,
    ScrollView
} from "react-native";
import Fonts from "../theme/Fonts";
import { getRH, getRW } from "../theme/Units";
import BackIcon from "../assets/svgs/back.svg";

import { initialWindowMetrics } from "react-native-safe-area-context";


function DetailPage({ navigation, route }) {

    const detail = route.params.item

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                translucent={true}
                backgroundColor={'rgba(255,255,255,0.1)'}
            />
            <SafeAreaView style={styles.container}>

                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.backIconView}
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <BackIcon width={'100%'} height={'100%'} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle} numberOfLines={1}>{detail.name}</Text>

                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Image
                    style={styles.productsCardImage}
                    source={{ uri: detail.image }}

                />

                <Text style={styles.title}>{detail.name}</Text>
                <Text style={styles.description}>{detail.description}</Text>
                </ScrollView>
                <View style={styles.bottomWrapper}>
                    <View>
                        <Text style={styles.priceText}>Price:</Text>
                        <Text style={styles.price}>{detail.price} ₺</Text>
                    </View>
                    <TouchableOpacity style={styles.cardButton}
                    onPress={() => {
                        navigation.navigate("BasketPage")
                    }}>
                        <Text style={styles.cardButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
                
            </SafeAreaView>
        </>
    );
}

export default DetailPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    headerContainer: {
        height: getRH(49),
        width: getRW(390),
        backgroundColor: '#2A59FE',
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: getRH(10)
    },
    backIconView: {
        height: getRH(45),
        width: getRW(40),
        marginLeft: getRW(10),
    },
    headerTitle: {
        fontFamily: Fonts.type.extraBold,
        fontSize: Fonts.size(24),
        color: '#FFFFFF',
        marginLeft: getRW(30),
        width: getRW(250),
        textAlign: 'center',
    },
    productsCardImage: {
        height: getRH(280),
        width: getRW(370),
        alignSelf: 'center',
       
    },
    title: {
        fontFamily: Fonts.type.extraBold,
        fontSize: Fonts.size(28),
        color: '#000000',
        marginHorizontal: getRW(10),
        marginTop: getRH(15)
    },
    description: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(18),
        color: '#000000',
        marginHorizontal: getRW(10),
        marginTop: getRH(15),
    },
    bottomWrapper: {
        flexDirection: "row",
        justifyContent: 'space-between',
        height: getRH(50),
        marginVertical: getRH(10),
        alignItems: 'center',
        zIndex: 1,
    },
    priceText: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(20),
        color: '#2A59FE',
        marginLeft: getRW(10)
    },
    price: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(20),
        color: '#000000',
        marginLeft: getRW(10)
    },
    cardButton: {
        height: getRH(50),
        width: getRW(170),
        backgroundColor: '#2A59FE',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: getRW(10),
        borderRadius: getRH(6),
    },
    cardButtonText: {
        fontFamily: Fonts.type.semiBold,
        fontSize: Fonts.size(20),
        color: '#FFFFFF',
    }
})
