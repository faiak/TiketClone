/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Button,
  TextInput,
  AppRegistry,
  TouchableHighlight,
} from 'react-native';

import SignatureCapture from 'react-native-signature-capture';

import FromToField from '../../Templates/FromToField';
import GoBackField from '../../Templates/GoBackField';
import PageHeader from '../../Templates/PageHeader';
import PenumpangField from '../../Templates/PenumpangField';
import KabinField from '../../Templates/KabinField';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {set_state} from '../../../config/redux/actions/pesawat';
import * as Icon from '../../../assets/icon';
import InputWithIcon from '../../../components/atoms/InputWithIcon';

const mapStateToProps = state => {
  return {
    pesawatReducer: state.pesawatReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      set_state,
    },
    dispatch,
  );
};

class PesawatPage extends Component {
  triggerChildAlert() {
    this.refs.dtp.setModalVisible(true);
  }

  saveSign() {
    this.refs['sign'].saveImage();
  }

  resetSign() {
    this.refs['sign'].resetImage();
  }

  _onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
  }
  _onDragEvent() {
    // This callback will be called when the user enters signature
    console.log('dragged');
  }

  render() {
    let state = {};
    // const counter = useSelector(state => state.counter);
    let eye = 'IcEye';
    let Ss = Icon[eye];
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Text>Tes123</Text>
        <SignatureCapture
          style={[{flex: 1}, styles.signature]}
          ref="sign"
          onSaveEvent={this._onSaveEvent}
          onDragEvent={this._onDragEvent}
          saveImageFileInExtStorage={false}
          showNativeButtons={false}
          showTitleLabel={false}
          viewMode={'portrait'}
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              this.saveSign();
            }}>
            <Text>Save</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => {
              this.resetSign();
            }}>
            <Text>Reset</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxWhite: {
    paddingTop: 0,
    padding: 16,
    paddingTop: 0,
    backgroundColor: 'white',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PesawatPage);

// export default PesawatPage;
