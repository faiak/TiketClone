
import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";

// import Picker from 'rmc-picker'

import Picker from 'react-native-wheel-picker'

// import WheelCurvedPicker from './WheelCurvedPicker'

// var WheelCurvedPickerItem = WheelCurvedPicker.Item;
var PickerItem = Picker.Item;

// import { Picker, DatePicker } from 'react-native-wheel-pick';
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

let count = 0;
const len = 10;
class PenumpangField extends Component {
    state = {

        isModalVisible: false,

        selectedBayi: 0,
        selectedDewasa: 0,
        selectedAnak: 0,


        backgroundColor: 'white',
        arrDewasa: ['1', '2', '3', '4', '5', '6', '7',],
        arrBayi: ['0', '1', '2', '3', '4',],
        arrAnak: ['0', '1', '2', '3', '4', '5', '6',],
        selectedItem: 2,
        itemList: ['1', '2', '3', '4', '5', '6',]

    };

    _handlePress(){
        this.setState({isModalVisible: false})
        this.props.set_state({
            penumpangAnak: this.state.selectedAnak,
            penumpangDewasa: this.state.selectedDewasa + 1,
            penumpangBayi: this.state.selectedBayi,
        })
    }

    dewasaChanged = (value) => {

        this.setState({
            selectedDewasa: value,
        }, () => {

            var sisaAnak = 7 - value;
            var sisaBayi = value >= 3 ? 3 : value;
            var arx = []
            for (var x = 0; x < sisaAnak; x++) {
                arx[x] = x.toString();
            }
            this.setState({ arrAnak: arx });
            if (this.state.selectedBayi > value) {
                this.setState({ selectedBayi: value + 1 })
            }
            var arx = []
            for (var x = 0; x <= sisaBayi + 1; x++) {
                arx[x] = x.toString();
            }
            this.setState({ arrBayi: arx, });
            if (this.state.selectedAnak + value > 6) {
                console.log("LASTO", sisaAnak)
                this.setState({ selectedAnak: sisaAnak - 1 })
            }

        })
    }
    anakChanged = (value) => {
        this.setState({ selectedAnak: value });
    }
    bayiChanged = (value) => {
        this.setState({ selectedBayi: value });
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.setState({ visibleModal: 'penumpangModal' })} style={{ borderBottomWidth: 1, marginBottom: 8, borderBottomColor: '#dee2ee', flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: '#8a93a7' }}>Penumpang</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: 14,
                            backgroundColor: '#fff',
                        }}>
                            <Icon style={{ paddingRight: 10 }} name="account-outline" size={15} color="#0064d2" />
                            <Text
                                style={{
                                    flex: 1,
                                    paddingTop: 5,
                                    paddingRight: 10,
                                    paddingBottom: 5,
                                    paddingLeft: 0,
                                    backgroundColor: '#fff',
                                    color: 'black',
                                    fontSize: 14,
                                    fontWeight: '600',
                                    fontFamily: 'OpenSans-SemiBold'
                                }}

                            >

                                {this.props.pesawatReducer.penumpangDewasa ? this.props.pesawatReducer.penumpangDewasa + " Dewasa " : null}
                                {this.props.pesawatReducer.penumpangAnak ? this.props.pesawatReducer.penumpangAnak + " Anak " : null}
                                {this.props.pesawatReducer.penumpangBayi ? this.props.pesawatReducer.penumpangBayi + " Bayi " : null}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Modal
                    isVisible={this.state.visibleModal === 'penumpangModal'}
                    onSwipeComplete={() => this.setState({ visibleModal: null })}
                    style={styles.bottomModal}>
                    <View style={{
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        borderTopLeftRadius: 13,
                        borderTopRightRadius: 13,
                        paddingTop: 5,
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                    }}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#dee2ee', padding: 8, paddingVertical: 16, flexDirection: 'row' }}>
                            <Icon name="close" size={21} color="black" style={{ paddingLeft: 8, justifyContent: 'center' }} onPress={() => this.setState({ visibleModal: null })} />
                            <Text style={{ paddingLeft: 8, flex: 1, justifyContent: 'center', fontSize: 16 }}>
                                Penumpang
                </Text>
                        </View>
                        <View style={{ paddingHorizontal: 0, paddingTop: 16, flexDirection: 'row' }}>
                            <View style={{ flex: 1, }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontWeight: '400' }}>Dewasa</Text>
                                    <Text style={{ fontSize: 12, fontWeight: '400' }}>Usia 12+</Text>
                                </View>
                                <Picker style={{ height: 180 }}
                                    itemSpace={60}
                                    selectedValue={this.state.selectedDewasa}
                                    itemStyle={{ color: "black", fontSize: 26 }}
                                    onValueChange={
                                        (value) => { this.dewasaChanged(value) }
                                    }>
                                    {this.state.arrDewasa.map((value, i) => (
                                        <PickerItem label={value} value={i} key={"money" + value} />
                                    ))}
                                </Picker>
                            </View>
                            <View style={{ flex: 1, }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontWeight: '400' }}>Anak</Text>
                                    <Text style={{ fontSize: 12, fontWeight: '400' }}>Usia 2-11</Text>
                                </View>
                                <Picker style={{ height: 180 }}
                                    itemSpace={60}
                                    selectedValue={this.state.selectedAnak}
                                    itemStyle={{ color: "black", fontSize: 26 }}
                                    onValueChange={
                                        (value) => { this.anakChanged(value) }
                                    }>
                                    {this.state.arrAnak.map((value, i) => (
                                        <PickerItem label={value} value={i} key={"money" + value} />
                                    ))}
                                </Picker>
                            </View>
                            <View style={{ flex: 1, }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontWeight: '400' }}>Bayi</Text>
                                    <Text style={{ fontSize: 12, fontWeight: '400' }}>Di bawah 2</Text>
                                </View>
                                <Picker style={{ height: 180 }}
                                    itemSpace={60}
                                    selectedValue={this.state.selectedBayi}
                                    itemStyle={{ color: "black", fontSize: 26 }}
                                    onValueChange={
                                        (value) => { this.bayiChanged(value) }
                                    }>
                                    {this.state.arrBayi.map((value, i) => (
                                        <PickerItem label={value} value={i} key={"money" + value} />
                                    ))}
                                </Picker>
                            </View>
                        </View>
                        <View style={{ padding: 8, paddingHorizontal: 16 }}>
                            <TouchableOpacity
                                title=""
                                style={{ marginTop: 8, alignItems: 'center', justifyContent: 'center', height: 48, borderRadius: 50, backgroundColor: '#146DC2', color: '#FFFFFF' }}
                                onPress={() => {

                                    this._handlePress();
                                }
                                }
                            ><Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600', fontFamily: 'OpenSans-SemiBold' }}>SELESAI</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },

});
export default connect(mapStateToProps, mapDispatchToProps)(PenumpangField)