import React, { Component } from 'react';
import { Text, View} from 'react-native';

const Label = (props) => {
    const { labelContainerStyle, labelViewStyle, labelStyle } = styles;
    const { label, children } = props;

    return (
        <View style={labelContainerStyle}>
            <View style={labelViewStyle}>
                <Text style={labelStyle}>
                    {label}
                </Text>
            </View>
            {children}
        </View>
    );
};

const styles = {
    labelContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2
    },
    labelViewStyle: {
        marginRight: 10,
        paddingVertical: 2
    },
    labelStyle: {
        fontWeight: '500',
    }
};

export { Label };
