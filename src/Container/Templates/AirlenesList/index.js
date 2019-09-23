import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class AirlenesList extends Component {
  state = {};
  render() {
    return (
      <View style={{backgroundColor: 'white', padding: 16, margin: 5}}>
        <View
          style={{
            paddingBottom: 8,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={{width: 30, height: 30, marginRight: 16}}>
            <Image
              source={{uri: this.props.img}}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
          <Text
            style={{color: '#8a93a7', flex: 1, textTransform: 'capitalize'}}>
            {this.props.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {this.props.departure} {this.props.departureCode}
          </Text>
          <Icon
            name="chevron-down"
            size={23}
            color="#8a93a7"
            style={{paddingLeft: 8}}
          />
        </View>
        <Text style={{color: '#8a93a7', paddingBottom: 8}}>
          {this.props.time} (langsung)
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{flex: 1}}>
            {this.props.arrival} {this.props.arrivalCode}
          </Text>
          <Text style={{color: '#0064D2', fontSize: 14, fontWeight: 'bold'}}>
            IDR {this.props.price}
          </Text>
          <Text style={{fontSize: 12, color: '#8a93a7'}}>/pax</Text>
        </View>
      </View>
    );
  }
}

export default AirlenesList;
