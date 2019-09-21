
import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    Switch,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


class PageHeader extends Component {
    render() {
        return (
            <View>
                <View style={{ borderRadius: 800, height: 800, overflow: 'hidden', position: 'absolute', justifyContent: 'center', marginLeft: -200, width: '200%', top: -600, backgroundColor: '#0064D2' }}>
                </View>
                
                <View style={{ flexDirection: 'row', height: 44, justifyContent: 'center', position: 'absolute', top: 0, padding: 8, width: '100%', backgroundColor: '#0064D2', flex: 1 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flex: 1 }}>
                        <Icon name="arrow-left" size={16} color="white" style={{ paddingLeft: 8, justifyContent: 'center' }} />
                        <Text style={{ justifyContent: 'center', flex: 1, paddingLeft: 20, color: 'white', fontSize: 16, fontWeight: '800', fontFamily: 'OpenSans-SemiBold' }}>Pesawat</Text>
                    </View>
                </View>
            </View>

        )
    }
}

export default PageHeader