/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';


import FromToField from '../../Templates/FromToField';
import GoBackField from '../../Templates/GoBackField';
import PageHeader from '../../Templates/PageHeader';
import PenumpangField from '../../Templates/PenumpangField';
import KabinField from '../../Templates/KabinField';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {set_state} from '../../../config/redux/actions/pesawat';
const mapStateToProps = state => {
    return{
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


class PesawatPage extends Component {

  
  triggerChildAlert() {
    
    this.refs.dtp.setModalVisible(true);
  }
  

  render() {
    let state = {};
    // const counter = useSelector(state => state.counter);
    
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
          {/* <FromToField /> */}

          <PageHeader />
          <View style={{ paddingHorizontal: 16, paddinTop: 0, marginTop: 52 }}>
            <View style={styles.boxWhite}>
              <FromToField />
              <GoBackField />
              <PenumpangField />
              <KabinField /> 
              <TouchableOpacity
                title=""
                style={{ marginTop: 8, alignItems: 'center', justifyContent: 'center', height: 48, borderRadius: 50, backgroundColor: '#FEDD00', color: '#146DC2' }}
                onPress={() => this.props.navigation.navigate('PesawatSearchPage')}
              ><Text style={{ color: '#146DC2', fontSize: 16, fontWeight: '600', fontFamily: 'OpenSans-SemiBold' }}>CARI PENERBANGAN</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ width: '100%', height: 210, position: 'absolute', bottom: 20 }}>
            <Image style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 8 }} source={require('../../../../assets/img/ill.png')} />
          </View>

        </View >

    );
  }
};



const styles = StyleSheet.create({
  boxWhite: {
    paddingTop: 0,
    padding: 16,
    paddingTop: 0,
    backgroundColor: 'white', borderRadius: 6, shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

});


export default connect(mapStateToProps, mapDispatchToProps)(PesawatPage)

// export default PesawatPage;
