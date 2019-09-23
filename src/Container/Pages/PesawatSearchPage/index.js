import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { set_state } from '../../../config/redux/actions/pesawat';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Timeline from 'react-native-timeline-flatlist'
import AirlenesList from '../../Templates/AirlenesList';
import helper from '../../../config/utils/helper'

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


class PesawatSearchpage extends Component {
    state = {
        airportList: []
    }
    constructor() {
        super()
        this.data = [
            { title: '10:10 SIN', description: 'Event 1 Description' },
            { title: '11:15 KUL' },
        ]
    }
    componentDidMount() {
        console.log(this.props.pesawatReducer)
        this.getAirportList();
    }

    getAirportList() {
        let url = "https://m.tiket.com/ms-gateway/tix-flight-search/search?" +
            "origin=" + this.props.pesawatReducer.airportFromCode +
            "&destination=" + this.props.pesawatReducer.airportToCode +
            "&originType=" + this.props.pesawatReducer.departedType +
            "&destinationType=" + this.props.pesawatReducer.arrivedType +
            "&departureDate=" + this.props.pesawatReducer.dateGo +
            "&adult=" + this.props.pesawatReducer.penumpangDewasa +
            "&child=" + this.props.pesawatReducer.penumpangAnak +
            "&infant=" + this.props.pesawatReducer.penumpangBayi +
            "&cabinClass=" + this.props.pesawatReducer.cabinClass +
            "&searchType=" + "ONE_WAY" +
            "&resultType=" + "DEPARTURE" +
            "&async=true"
        console.log(url)
        return fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson.data.requestItems)
                this.getAirportList_(responseJson.data.requestItems);
                return responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getAirportList_(requested) {
        fetch('https://m.tiket.com/ms-gateway/tix-flight-search/search/streaming', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                requestItems: requested,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.data.searchList.departureFlights)
                this.setState({ airportList: responseJson.data.searchList.departureFlights })
                return responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#0064D2', flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#0064D2', paddingBottom: 8 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1, paddingTop: 8 }}>
                            <Icon name="arrow-left" size={26} color="white" style={{ paddingLeft: 8 }} />
                            <View style={{ flex: 1 }}>
                                <View style={{ flexDirection: 'row', paddingLeft: 20, alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '800', fontFamily: 'OpenSans-SemiBold' }}>
                                        {this.props.pesawatReducer.airportFrom}
                                    </Text>
                                    <Icon name="arrow-right" size={16} color="white" style={{ paddingLeft: 8, paddingRight: 8 }} />
                                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '800', fontFamily: 'OpenSans-SemiBold' }}>
                                        {this.props.pesawatReducer.airportTo}
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row', paddingLeft: 20, alignItems: 'center', color: 'white', }}>
                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '800', fontFamily: 'OpenSans-SemiBold' }}>
                                        {this.props.pesawatReducer.airportFromCode}
                                    </Text>
                                    <Icon name="swap-horizontal" size={12} color="white" style={{ paddingLeft: 8, paddingRight: 8 }} />
                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '800', }}>
                                        {this.props.pesawatReducer.airportToCode} | {this.props.pesawatReducer.dateGo} |
                                    </Text>
                                    <Icon name="account-outline" size={12} color="white" style={{ paddingLeft: 8 }} />
                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: '800', }}>{this.props.pesawatReducer.penumpangDewasa + this.props.pesawatReducer.penumpangAnak + this.props.pesawatReducer.penumpangBayi}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: 'white', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 20
                    }}>
                        <Text style={{ color: '#35405a', fontSize: 14, fontWeight: '400' }}>
                            Menampilkan penerbangan terbaik
                        </Text>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#F5F6FA', }}>
                    <FlatList
                        data={this.state.airportList}
                        renderItem={
                            ({ item }) =>
                                <AirlenesList img={item.marketingAirline.urlIcon} departure={item.departure.time} arrival={item.arrival.time} departureCode={item.departure.airportCode} arrivalCode={item.arrival.airportCode} name={item.marketingAirline.displayName}
                                    price={helper.getPriceFormatted(item.fareDetail.cheapestFare)}
                                    time={helper.getTimeFormatted(item.totalTravelTimeInMinutes)}
                                />

                        }
                        keyExtractor={(item, index) => index.toString()}
                    />


                </View>
            </View>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PesawatSearchpage)
