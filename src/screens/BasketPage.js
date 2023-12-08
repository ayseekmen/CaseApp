import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    View,
    SafeAreaView,
    ScrollView,
    Button
} from "react-native";
import Fonts from "../theme/Fonts";
import { getRH, getRW } from "../theme/Units";




function BasketPage({ navigation }) {

    const [counter, setCounter] = useState(0);

function increaseCounter() {
    setCounter(counter + 1);
}

function decreaseCounter() {
    setCounter(counter - 1);
}


    return (
        <>
            <StatusBar
                barStyle="dark-content"
                translucent={true}
                backgroundColor={'rgba(255,255,255,0.1)'}
            />
            <SafeAreaView style={styles.container}>

            <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>E-Market</Text>
                </View>


<View>
    <View style={styles.productDetail}>
        <Text> AaaAAaaAa</Text>
        <Text> 1231231 ₺</Text>
    </View>
    <View style={styles.counterWrapper}>
    <TouchableOpacity onPress={decreaseCounter} >
        <Text>-</Text>
    </TouchableOpacity>

<View>
<Text>{counter}</Text>
</View>
    

    <TouchableOpacity onPress={increaseCounter} >
        <Text>+</Text>
    </TouchableOpacity>
    </View>
</View>



                <View style={styles.bottomWrapper}>
                    <View>
                        <Text style={styles.priceText}>Price:</Text>
                        <Text style={styles.price}>Asda ₺</Text>
                    </View>
                    <TouchableOpacity style={styles.cardButton}
                        onPress={() => {
                            navigation.navigate("BasketPage")
                        }}>
                        <Text style={styles.cardButtonText}>Complete</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>
    );
}

export default BasketPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    headerContainer: {
        height: getRH(49),
        width: getRW(390),
        backgroundColor: '#2A59FE'
    },
    headerTitle: {
        fontFamily: Fonts.type.extraBold,
        fontSize: Fonts.size(24),
        color: '#FFFFFF',
        marginTop: getRH(6),
        marginLeft: getRW(16),
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
