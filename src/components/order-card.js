import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

import appColorConstants from '../utils/app-color-constants'
import ButtonWithText from './button-with-text';

export default function OrderCard(props) {

    const {productName, productImage, sellerName, price} = props;

    return (
        <View style={styles.cardContainer}>

            <View style={{ flexDirection: 'row', padding: 10}}>

                <Image 
                    source={productImage}
                    style={styles.imageContainer}
                />

                <View style={{ marginLeft: 5 }}>

                    <Text style={styles.productNameText}>{productName}</Text>
                    <Text style={styles.sellerNameContainer}>Seller: {sellerName}</Text>
                    <Text style={styles.productPriceText}>${price}</Text>

                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: appColorConstants.COLOR_LAVANDER,
        width: '100%',
        height: Dimensions.get('window').height / 4,
        borderRadius: 30,
        marginBottom: 30
    },
    imageContainer: {
        resizeMode: 'contain',
        height: appColorConstants.ORDER_IMAGE_SIZE_H,
        width: appColorConstants.ORDER_IMAGE_SIZE_W,
        borderRadius: 20
    },
    productNameText: {
        fontSize: appColorConstants.FONT_SIZE_MEDIUM,
        fontWeight: appColorConstants.FONT_WEIGHT_HARD
    },
    productPriceText: {
        fontSize: appColorConstants.FONT_SIZE_EXTRA_LARGE,
        fontWeight: appColorConstants.FONT_WEIGHT_HARD,
        color: appColorConstants.COLOR_DARK_RED,
        marginTop: 10
    },
    sellerNameContainer: {
        fontSize: appColorConstants.FONT_SIZE_SMALL,
        fontWeight: appColorConstants.FONT_WEIGHT_LOW,
        color: appColorConstants.COLOR_DARK_RED,
        marginTop: 10
    }
})