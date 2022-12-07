import * as React from 'react';

import { Text, TouchableOpacity, StyleSheet } from "react-native";
import appColorConstants from '../utils/app-color-constants';

export default function ButtonWithText(props) {
    return (
        <TouchableOpacity
            disabled={props.disable}
            style={[styles.buttonContainer, props.buttonStyle]}
            onPress={props.onPress}
        >
            <Text style={[styles.buttonText, props.buttonTextStyle]}>
                {props.buttonText}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: appColorConstants.COLOR_PURPLE,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 20,
    },
    buttonText: {
        fontSize: appColorConstants.FONT_SIZE_SMALL,
        textAlign: 'center',
        color: appColorConstants.COLOR_GRAY_2,
    }
});