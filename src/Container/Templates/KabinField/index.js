
import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from "react-native-modal";
import KelasItem from '../../../components/molecules/KelasItem';
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


class KabinField extends Component {
    state = {
        isModalVisible: false,
        selectedClass: {
            id: 1,
            name: "Ekonomi"
        },
    };
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.setState({ visibleModal: 'bottom' })} style={{ borderBottomWidth: 1, marginBottom: 8, borderBottomColor: '#dee2ee', flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ color: '#8a93a7' }}>Kelas Kabin</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: 14,
                            backgroundColor: '#fff',
                        }}>
                            <Icon style={{ paddingRight: 10 }} name="seat-recline-extra" size={15} color="#0064d2" />
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
                            >{this.props.pesawatReducer.cabinClass}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <Modal
                    isVisible={this.state.visibleModal === 'bottom'}
                    onSwipeComplete={() => this.setState({ visibleModal: null })}
                    style={styles.bottomModal}>
                    <View style={styles.content}>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#dee2ee', padding: 8, flexDirection: 'row' }}>
                            <Icon name="close" size={21} color="black" style={{ paddingLeft: 8, justifyContent: 'center' }} onPress={() => this.setState({ visibleModal: null })} />
                            <Text style={{ paddingLeft: 8, flex: 1, justifyContent: 'center', fontSize: 16 }}>
                                Kelas Kabin
                            </Text>
                        </View>
                        <View style={{ paddingHorizontal: 16 }}>
                            <TouchableOpacity onPress={() => {
                                this.props.set_state({ cabinClass: "ECONOMY", cabinClassCode: 1 })
                                this.setState({ visibleModal: null })
                            }} >
                                <KelasItem active={this.state.selectedClass.id == 1 ? 1 : 0} id={1} name="Ekonomi" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.props.set_state({ cabinClass: "FIRST", cabinClassCode: 2 })
                                this.setState({ visibleModal: null })
                            }} >
                                <KelasItem active={this.state.selectedClass.id == 2 ? 1 : 0} id={2} name="First" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                this.props.set_state({ cabinClass: "Bisnis", cabinClassCode: "BUSINES" })
                                this.setState({ visibleModal: null })
                            }} >
                                <KelasItem active={this.state.selectedClass.id == 3 ? 1 : 0} id={3} name="Bisnis" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        justifyContent: 'center',
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        paddingTop: 5,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});
// export default KabinField

export default connect(mapStateToProps, mapDispatchToProps)(KabinField)