
import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    Animated,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class InputFieldx extends Component {
    state = {
        valx: ''
    }
    constructor() {
        super();
        this.scaleValue = new Animated.Value(1)
    }
    componentWillMount() {
        this.setState({ valx: this.props.value })
    }
    componentDidUpdate(propsSebelum) {
        if (propsSebelum.value !== this.props.value) {
            this.scaleValue.setValue(1);
            Animated.timing(
                this.scaleValue,
                {
                    toValue: 0.01,
                    duration: 300,
                }
            ).start(() => {
                this.setState({ valx: this.props.value }, () => {
                    Animated.spring(
                        this.scaleValue,
                        {
                            toValue: 1,
                            friction: 5,
                        }
                    ).start()
                })
            });
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={() => { this.props.func(this.props.number) }} >
                <View style={{
                    paddingVertical: 8,
                }}>
                    <Text style={{ color: '#8a93a7', paddingBottom: 0 }}>{this.props.label}</Text>
                    <View style={{
                        paddingTop: 0,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        fontSize: 14,
                        backgroundColor: '#fff',
                    }}>
                        <Icon style={{ paddingRight: 10 }} name={this.props.ico} size={15} color="#0064d2" />
                        <View style={{
                            paddingTop: 5,
                            paddingRight: 10,
                            paddingBottom: 3,
                            paddingLeft: 0,
                            backgroundColor: '#fff',
                            color: 'black',
                            fontSize: 14,
                            fontWeight: '600',
                            fontFamily: "OpenSans-SemiBold"
                        }} >
                            <Animated.Text style={{ transform: [{ scale: this.scaleValue }] }}>{this.state.valx}</Animated.Text>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default InputFieldx