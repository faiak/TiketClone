
import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class InputBaru extends Component {


    render() {
        return (
            <View style={{
                paddingVertical: 8,
            }}>
                <Text style={{ color: '#8a93a7', paddingBottom: 0 }}>{this.props.label}</Text>
                <View style={{
                    paddingTop: 0,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 14,
                    backgroundColor: '#fff',
                }}>
                    <Icon style={{ paddingRight: 10 }} name={this.props.ico} size={15} color="#0064d2" />
                    <TextInput
                        placeholder="asdasd"
                        value={this.props.value}
                        onChangeText={(teks) => this.props.func(teks)}
                        style={{
                            flex: 1,
                            paddingTop: 5,
                            paddingRight: 10,
                            paddingBottom: 3,
                            paddingLeft: 0,
                            backgroundColor: '#fff',
                            color: 'black',
                            fontSize: 14,
                            fontWeight: '600',
                            fontFamily: "OpenSans-SemiBold"
                        }} />
                        <TouchableOpacity onPress>

                        </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default InputBaru