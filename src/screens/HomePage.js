import React from "react";
import {
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    SafeAreaView,
    View,
    TextInput,
    FlatList,
    Image
} from "react-native";
import Fonts from "../theme/Fonts";
import { getRH, getRW } from "../theme/Units";
import SearchIcon from "../assets/svgs/search.svg";




function HomePage({ navigation }) {

    const products = [{
        "createdAt": "2023-07-17T07:21:02.529Z",
        "name": "Bentley Focus",
        "image": "https://loremflickr.com/640/480/food",
        "price": "51.00",
        "description": "Quasi adipisci sint veniam delectus. Illum laboriosam minima dignissimos natus earum facere consequuntur eius vero. Itaque facilis at tempore ipsa. Accusamus nihil fugit velit possimus expedita error porro aliquid. Optio magni mollitia veritatis repudiandae tenetur nemo. Id consectetur fuga ipsam quidem voluptatibus sed magni dolore.\nFacilis commodi dolores sapiente delectus nihil ex a perferendis. Totam deserunt assumenda inventore. Incidunt nesciunt adipisci natus porro deleniti nisi incidunt laudantium soluta. Nostrum optio ab facilis quisquam.\nSoluta laudantium ipsa ut accusantium possimus rem. Illo voluptatibus culpa incidunt repudiandae placeat animi. Delectus id in animi incidunt autem. Ipsum provident beatae nisi cumque nulla iure.",
        "model": "CTS",
        "brand": "Lamborghini",
        "id": "1"
    }, {
        "createdAt": "2023-07-17T02:49:46.692Z",
        "name": "Aston Martin Durango",
        "image": "https://loremflickr.com/640/480/food",
        "price": "374.00",
        "description": "Odio et voluptates velit omnis incidunt dolor. Illo sint quisquam tenetur dolore nemo molestiae. Dolorum odio dicta placeat. Commodi rerum molestias quibusdam labore. Odio libero doloribus. Architecto repellendus aperiam nulla at at voluptatibus ipsum.\nFugit expedita a quo totam quaerat amet eveniet laboriosam. Ad assumenda atque porro neque iusto. Inventore repudiandae esse non sit veritatis ab reprehenderit quas. Sit qui natus exercitationem quis commodi vero.\nIure reiciendis quas corrupti incidunt repellat voluptatem esse eveniet. Aliquid illo cum doloremque similique. Blanditiis corporis repellendus cumque totam quod iusto dolorum. Incidunt a eos eum voluptas tempora voluptas reiciendis autem.",
        "model": "Roadster",
        "brand": "Smart",
        "id": "2"
    }, {
        "createdAt": "2023-07-16T08:46:46.400Z",
        "name": "Ford XC90",
        "image": "https://loremflickr.com/640/480/city",
        "price": "735.00",
        "description": "Minima quas corrupti delectus. Pariatur itaque at. Voluptate expedita unde excepturi dolores quasi quis. Delectus occaecati quaerat iusto nihil reiciendis voluptatem excepturi illum.\nVoluptatem qui ullam quas commodi ullam. Incidunt atque excepturi eveniet id consectetur maxime quia suscipit minima. Dicta excepturi molestiae dolore neque. Repellat minus sit inventore amet delectus omnis. Corrupti dolorem quam occaecati quisquam.\nVoluptatibus dolore quos dolorem nemo iste ipsa totam quisquam odio. Eveniet enim animi adipisci iusto sit eveniet. Provident soluta maxime voluptatum accusamus consectetur nostrum sequi atque. Sunt doloribus quibusdam quia maxime vero ad accusantium. Esse animi velit velit aliquid itaque voluptatem.",
        "model": "Taurus",
        "brand": "Ferrari",
        "id": "3"
    }, {
        "createdAt": "2023-07-17T05:04:01.235Z",
        "name": "Rolls Royce Taurus",
        "image": "https://loremflickr.com/640/480/transport",
        "price": "779.00",
        "description": "Similique iste repellat minima recusandae similique. Voluptates omnis perferendis eius possimus dolor aut dignissimos temporibus. Quo molestias praesentium quasi rerum. Vitae harum pariatur recusandae reprehenderit. Blanditiis deleniti delectus quia. Suscipit blanditiis quod sunt expedita animi quis.\nInventore provident molestiae dicta aut corrupti. Dicta odio dolore minima voluptatibus velit velit ea voluptatibus. Aliquam occaecati magnam consectetur illum natus. Ipsum est ut quia est ab. Eius ad tempore libero ipsa ea atque.\nPariatur aperiam voluptas similique occaecati repellendus. Voluptas necessitatibus ut exercitationem non tenetur enim. Iure aliquam maiores eveniet consequatur nihil.",
        "model": "Jetta",
        "brand": "Volkswagen",
        "id": "4"
    }]
    
    
    const renderFlatlistItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.productsContainer}
            onPress={() => {
                navigation.navigate("DetailPage", { item })
            }}>
                <View >
                    <Image
                        style={styles.productsCardImage}
                        source={{ uri: item.image }}
                        
                    />
                    <Text style={styles.price}>{item.price} ₺</Text>
    
                    <Text style={styles.name}>{item.name}</Text>
    
                    <TouchableOpacity style={styles.cardButton}>
                            <Text style={styles.cardButtonText}>Add to Cart</Text>
                        </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
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

                <View style={styles.inputWrapper}>
                    <View style={styles.searchIconView}>
                        <SearchIcon width={'100%'} height={'100%'} />
                    </View>
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor='#626B8B'
                        style={styles.input}
                    />
                </View>

                <View style={styles.filtersWrapper}>
                    <Text style={styles.filtersText}>Filters:</Text>
                    <TouchableOpacity style={styles.filtersButton}>
                        <Text style={styles.filtersButtonText}>Select Filter</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    style={styles.flatList}
                    data={products}
                    renderItem={renderFlatlistItem}
                />

            </SafeAreaView>

        </>
    );
}

export default HomePage;

const styles = StyleSheet.create({
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
    inputWrapper: {
        flexDirection: "row",
        height: getRH(40),
        width: getRW(360),
        alignItems: 'center',
        backgroundColor: '#FAFAFB',
        marginLeft: getRW(16),
        marginTop: getRH(14),
        borderRadius: getRH(8),
    },
    searchIconView: {
        height: getRH(24),
        width: getRW(24),
        marginLeft: getRW(12),
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(18),
        height: getRH(24),
        width: getRW(316),
    },
    filtersWrapper: {
        flexDirection: "row",
        marginBottom: getRH(33),

    },
    filtersText: {
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.size(18),
        color: '#000000',
        marginTop: getRH(19),
        marginLeft: getRW(16),
    },
    filtersButton: {
        height: getRH(36),
        width: getRW(158),
        backgroundColor: '#FAFAFB',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getRH(14),
        marginLeft: getRW(138),
    },
    filtersButtonText: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(14),
        color: '#000000',
    },


    //FLATLİST
    flatList: {
        marginLeft: getRW(15)
    },
    productsContainer: {
        width: getRW(170),
        marginBottom: getRH(14),
        borderWidth: 1,
        borderColor: 'black',
    },
    productsCardImage: {
        height: getRW(150),
        width: getRW(150),
        marginTop: getRH(10),
        marginHorizontal: getRW(10)
    },
    price: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(14),
        color: '#2A59FE',
        marginTop: getRH(15),
        marginLeft: getRW(10),
    },
    name: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(14),
        color: 'black',
        marginTop: getRH(15),
        marginLeft: getRW(10),
        width: getRW(150),
    },
    cardButton: {
        height: getRH(36),
        width: getRW(150),
        backgroundColor: '#2A59FE',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getRH(15),
        marginLeft: getRW(10),
        marginBottom: getRH(10),
    },
    cardButtonText: {
        fontFamily: Fonts.type.regular,
        fontSize: Fonts.size(16),
        color: '#FFFFFF',
    }
})
