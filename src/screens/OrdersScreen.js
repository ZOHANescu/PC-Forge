import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import appColorConstants from "../utils/app-color-constants";
import OrderCard from "../components/order-card";

const ventilatorImage = require("../../assets/ventilator.png");

const OrdersScreen = ({ navigation }) => {

    const dummyOrders = [
        {
            id: 1,
            productName: "Ventilator ASUS ROG M6",
            productImage: ventilatorImage,
            price: 200,
            sellerName: "Bacszkovici Vladislav"
        },
        {
            id: 2,
            productName: "Ventilator ASUS ROG M6",
            productImage: ventilatorImage,
            price: 200,
            sellerName: "Bacszkovici Vladislav"
        },
        {
            id: 3,
            productName: "Ventilator ASUS ROG M6",
            productImage: ventilatorImage,
            price: 200,
            sellerName: "Bacszkovici Vladislav"
        },
        {
            id: 4,
            productName: "Ventilator ASUS ROG M6",
            productImage: ventilatorImage,
            price: 200,
            sellerName: "Bacszkovici Vladislav"
        },
        {
            id: 5,
            productName: "Ventilator ASUS ROG M6",
            productImage: ventilatorImage,
            price: 200,
            sellerName: "Bacszkovici Vladislav"
        },
    ];

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        setOrders(dummyOrders);
    }, []);

    return(
        <SafeAreaView style={styles.container}>

            {
                orders.length === 0 ?

                <Text style={{
                    fontSize: appColorConstants.FONT_SIZE_EXTRA_LARGE,
                    fontWeight: appColorConstants.FONT_WEIGHT_HARD,
                    alignSelf: 'center',
                    marginTop: Dimensions.get('window').height / 5,
                    color: appColorConstants.COLOR_PURPLE
                }}>You have no orders</Text> :

            <ScrollView style={styles.ordersContainer}>

                <View>
                    <Text style={styles.titleContainer}>Your orders</Text>
                </View>

                {
                    orders.map((order) => {
                        console.log(order.sellerName);
                        return (
                            <OrderCard 
                                key={order.id}
                                productName={order.productName}
                                sellerName={order.sellerName}
                                productImage={order.productImage}
                                price={order.price}
                            />
                        );
                    })
                }

            </ScrollView>
            }

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColorConstants.BACKGROUND_BEIGE,
    },
    titleContainer: {
        justifyContent: 'flex-start',
        fontSize: appColorConstants.FONT_SIZE_LARGE,
        fontWeight: appColorConstants.FONT_WEIGHT_HARD,
        marginLeft: 20,
        marginBottom: 20,
        bottom: 15
    },
    ordersContainer: {
        padding: 20,
        marginTop: 10,
    }
});

export default OrdersScreen;
