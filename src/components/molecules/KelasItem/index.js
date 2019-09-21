import React, { Component } from 'react';
import {
  View,
  Text,

} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const KelasItem = (props) => {
  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#dee2ee', flexDirection: 'row', paddingVertical: 12 }}>
      <Text style={{ flex: 1, fontSize: 16 }}>
        {props.name}
      </Text>
      {
        props.active == 1 ? <Icon name="check" size={21} color="#0064d2" style={{ paddingLeft: 8, justifyContent: 'center' }} onPress={() => this.setState({ visibleModal: null })} /> : null
      }
    </View>
  )
}

export default KelasItem