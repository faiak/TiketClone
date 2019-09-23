
import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class OptionCity extends Component {
    _onPress() {
        this.props.onPressItem(this.props.code, this.props.city, this.props.type);
    }
    render() {
        return (
            <TouchableOpacity
                onPress={() => this._onPress()}
            >
                <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
                    <Icon style={{ paddingRight: 16, paddingVertical: 0 }} name="domain" size={20} color="#0064D2" />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'OpenSans-Reguler', fontWeight: '500' }}>{this.props.city}</Text>
                        <Text style={{ fontSize: 12, color: '#58627a', fontFamily: 'OpenSans-Reguler', fontWeight: '100' }}>{this.props.city}, Indonesia</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 12, borderRadius: 5, paddingHorizontal: 16, paddingVertical: 5, backgroundColor: '#EFF1F7', color: '#8a93a7' }}>{this.props.code}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }

}
export default OptionCity;