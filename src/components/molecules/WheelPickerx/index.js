import React, { Component } from 'react';
import {
    View,
    Text,

} from 'react-native';

import { Picker, DatePicker } from 'react-native-wheel-pick';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WheelPickerx = (props) => {
    return (

        <View style={{ flex: 1, }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: '400' }}>Dewasa</Text>
                <Text style={{ fontSize: 12, fontWeight: '400' }}>Usia 12+</Text>
            </View>
            <Picker
                style={{ backgroundColor: 'white' }}
                selectedValue='1'
                pickerData={['1', '2', '3', '4', '5', '6', '7']}
                onValueChange={value => { }}
                itemSpace={60} // this only support in android
            />
        </View>
    )
}

export default WheelPickerx