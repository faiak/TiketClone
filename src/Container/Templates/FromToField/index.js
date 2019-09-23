
import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Input,
    ScrollView,
    Animated,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    FlatList,
    Easing
} from 'react-native';

import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Dash from 'react-native-dash';
import InputField from '../../../components/molecules/InputField';
import OptionCity from '../../../components/molecules/OptionCity';

import * as Animatable from 'react-native-animatable';

import {
    SharedElement,
    SharedElementTransition,
    nodeFromRef
} from 'react-native-shared-element';
import InputFieldx from '../../../components/molecules/InputFieldx';
import InputBaru from '../../../components/molecules/InputBaru';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_state } from '../../../config/redux/actions/pesawat';
const mapStateToProps = state => {
    return {
        pesawatReducer: state.pesawatReducer
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            set_state
        },
        dispatch
    )
}




const zoomOut = {
    0: {
        opacity: 1,
        scale: 1,
    },
    0.5: {
        opacity: 1,
        scale: 0.3,
    },
    1: {
        opacity: 0,
        scale: 0,
    },
};

let startAncestor;
let startNode;

let endAncestor;
let endNode;
const position = new Animated.Value(0);

class FromToField extends Component {
    constructor() {
        super();
        this.spinValue = new Animated.Value(0)
        this.outValue = new Animated.Value(0)
    }
    state = {
        v1: "Surabaya (SUBC)",
        v2: "Ngurah Rai (DPS)",
        vselect: 1,
        isModalVisible: false,
        airportList: [],
        val: 3,
        fs: 16,
        tk1: "ONE",
        state_baru: 'tesbaru',

    }
    componentDidMount() {
        this.getMoviesFromApiAsync()
        this.spin();
    }

    getMoviesFromApiAsync() {
        return fetch('https://m.tiket.com/ms-gateway/tix-flight-master-discovery/popularDestination/findPopularCity')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.data)
                this.setState({ airportList: responseJson.data })
                return responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    toggleModal_ = (vsel) => {
        this.setState({ vselect: vsel })
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    changeValue = () => {
        var tmp = this.props.pesawatReducer.airportTo
        var tmp2 = this.props.pesawatReducer.airportFrom
        this.props.set_state({ airportFrom: tmp, airportTo: tmp2 })
        var tmp = this.props.pesawatReducer.airportToCode
        var tmp2 = this.props.pesawatReducer.airportFromCode
        this.props.set_state({ airportFromCode: tmp, airportToCode: tmp2 })
        var tmp = this.props.pesawatReducer.arrivedType
        var tmp2 = this.props.pesawatReducer.departedType
        this.props.set_state({ departedType: tmp, arrivedType: tmp2 })
    }
    _onPressItem = (code, city, type) => {
        if (this.state.vselect === 1)
            this.props.set_state({ airportFrom: city, airportFromCode: code, departedType: type })
        else
            this.props.set_state({ airportTo: city, airportToCode: code, arrivedType: type })
        this.toggleModal();
    };

    handleViewRef = ref => this.viewx = ref;
    bounce = () => {
        this.refs.child.bounceOut(800).then(endState => {
            if (endState.finished) {
                this.refs.child.bounceIn(1500).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
            }
        })

    }

    spin() {
        this.spinValue.setValue(0);
        Animated.spring(
            this.spinValue,
            {
                toValue: 1,
                friction: 2,
            }
        ).start();
    }
    outAnim() {
        this.outValue.setValue(1);
        Animated.timing(
            this.outValue,
            {
                toValue: 0.01,
                duration: 300,
            }
        ).start(() => {
            this.setState({ tk1: "TWO" }, () => {
                Animated.spring(
                    this.outValue,
                    {
                        toValue: 1,
                        friction: 2,
                    }
                ).start()
            })

        });
    }

    fungsi_state_baru = (value) => {
        this.setState({ state_baru: value });
    }

    render() {
        return (
            <View style={{ borderBottomWidth: 1, marginBottom: 8, borderBottomColor: '#dee2ee' }}>

                <InputFieldx number={1} func={this.toggleModal_} label="Dari" ico="airplane-takeoff" value={this.props.pesawatReducer.airportFrom + " (" + this.props.pesawatReducer.airportFromCode + ")"}  />
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Dash dashThickness={1} dashStyle={{ backgroundColor: '#dee2ee' }} style={{ marginRight: 0, alignItems: 'center', flex: 1, borderColor: '#8a93a7' }} />
                    <TouchableOpacity onPress={this.changeValue} style={{ backgroundColor: 'white', borderWidth: 0.3, borderColor: '#8a93a7', borderRadius: 50, width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon style={{ justifyContent: 'center', alignItems: 'center' }} name="sync" size={15} color="#0064d2" />
                    </TouchableOpacity>
                </View>
                <InputFieldx number={2} func={this.toggleModal_} label="Ke" ico="airplane-landing" value={this.props.pesawatReducer.airportTo + " (" + this.props.pesawatReducer.airportToCode + ")"} />
                <Modal style={{ backgroundColor: 'white', margin: 0, padding: 0 }}
                    isVisible={this.state.isModalVisible}>
                    <View style={{ flex: 1, direction: "row" }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: '#0064D2' }}>
                            <TouchableOpacity onPress={this.toggleModal} >
                                <Icon name="close" size={18} color="white" style={{ paddingLeft: 8, paddingVertical: 8, justifyContent: 'center' }} />
                            </TouchableOpacity>
                            <Text style={{ flex: 1, paddingLeft: 13, color: 'white', fontSize: 16, fontWeight: '800', fontFamily: 'OpenSans-SemiBold' }}>Pilih Keberangkatan</Text>
                        </View>
                        <View style={{ paddingHorizontal: 16, paddingTop: 13, paddingBottom: 16, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#0064D2' }}>
                            <View style={{ padding: 4, flexDirection: 'row', backgroundColor: 'white', borderRadius: 4 }}>
                                <View style={{
                                    borderRadius: 8,
                                    paddingTop: 0,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: 14,
                                }}>
                                    <Icon style={{ paddingRight: 10, paddingVertical: 0 }} name="map-marker-outline" size={20} color="#8a93a7" />
                                    <TextInput
                                        placeholder="Cari kota atau bandara"
                                        placeholderTextColor="#8a93a7"
                                        style={{
                                            paddingVertical: 0,
                                            flex: 1,
                                            paddingRight: 10,
                                            paddingLeft: 0,
                                            color: 'black',
                                            fontSize: 14,
                                            fontWeight: '600',
                                            fontFamily: "OpenSans-SemiBold",
                                        }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ padding: 16, }}>
                            <Text style={{ color: '#8a93a7', paddingBottom: 16, fontSize: 16 }}>Tujuan terpopuler</Text>
                            <FlatList
                                data={this.state.airportList}
                                renderItem={
                                    ({ item }) =>
                                        <OptionCity onPressItem={this._onPressItem} type={item.type.toUpperCase()} city={item.airportName} code={item.airportCode} />
                                }
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FromToField)

// export default FromToField