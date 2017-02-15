import React, { Component } from 'react';
import { Text, View} from 'react-native';

const Heading = (props) => {
    const { headingContainerStyle, headingStyle } = styles;
    const { label } = props;

    return (
        <View style={headingContainerStyle}>
            <Text style={headingStyle}>
                {label}
            </Text>
        </View>
    );
};

const styles = {
    headingContainerStyle: {
        padding: 4,
        backgroundColor: '#f6f7f8'
    },
    headingStyle: {
        fontWeight: '500',
        fontSize: 14,
    }
};

export { Heading };
