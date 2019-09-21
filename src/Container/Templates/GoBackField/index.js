
import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  Switch,
  TouchableOpacity
} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-ranges';

class GoBackField extends Component {
  
  state = {
    isModalVisible: false,
    dateGo: "Sab, 14 Sep 2019",
    dateGo2: "Sab, 14 Sep 2019",
    dateBack: "-",
    dateMode: "single",
    switchValue: false,
  };
  toggleSwitch = (value) => {
    this.setState({ switchValue: value })
  }

  accessChild = () => {
    this.refs.child.clicked();
  }


  customButton = (onConfirm) => (
    <TouchableOpacity
      title=""
      onPress={onConfirm}
      style={{ width: '80%', marginTop: 8, alignItems: 'center', justifyContent: 'center', height: 48, borderRadius: 50, backgroundColor: '#FEDD00', color: '#146DC2' }}

    ><Text style={{ color: '#146DC2', fontSize: 16, fontWeight: '600', fontFamily: 'OpenSans-SemiBold' }}>Selesai</Text>
    </TouchableOpacity>

  )
  render() {
    // console.log();
    // var dt = ;
    // console.log(dt)
    // this.setState({dateGo: moment().format(('YYYY/MM/DD'))})
    return (
      <View>
        <View style={{ borderBottomWidth: 1, marginBottom: 8, borderBottomColor: '#dee2ee', flexDirection: 'row' }}>
          
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this.accessChild} >
              <Text style={{ color: '#8a93a7' }}>Pergi</Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 14,
                backgroundColor: '#fff',
              }}>
                <Icon style={{ paddingRight: 10 }} name="calendar-outline" size={15} color="#0064d2" />
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
                >{this.state.dateGo}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{ color: '#8a93a7' }}>Pulang-Pergi?</Text>
            <Switch style={{
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
              transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }]
            }}
              trackColor="#B4E1FF"
              onValueChange={this.toggleSwitch} 
              value={this.state.switchValue}
            />
          </View>
        </View>

        {
          this.state.switchValue ?
            <View style={{ borderBottomWidth: 1, marginBottom: 8, borderBottomColor: '#dee2ee', flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={this.accessChild} >
                  <Text style={{ color: '#8a93a7' }}>Pulang</Text>
                  <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 14,
                    backgroundColor: '#fff',
                  }}>
                    <Icon style={{ paddingRight: 10 }} name="calendar-outline" size={15} color="#0064d2" />
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
                    >{this.state.dateBack}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            : null
        }



        <DatePicker
          returnFormat="DD MM YYYY"
          onConfirm={(value) => {
            console.log(value); this.setState({
              dateGo: value.startDate ? value.startDate : value.currentDate,
              dateBack: value.endDate
            })
          }}
          // onConfirm={function(){alert("x")}}
          title="asd"
          selectedBgColor="#FFF5B2"
          selectedBgColorSoft="#FEDD00"
          selectedTextColor="black"
          markText="Tanggal"
          buttonText="Selesai"
          blockBefore={true}
          customButton={this.customButton}

          customStyles={{
            placeholderText: { fontSize: 20 }, // placeHolder style
            headerStyle: { backgroundColor: '#0064D2' },			// title container style
            headerMarkTitle: { color: 'white', fontSize: 16, fontWeight: '700' }, // title mark style 
            headerDateTitle: {}, // title Date style
            contentInput: {}, //content text container style
            contentText: {}, //after selected text Style
          }} // optional 
          centerAlign // optional text will align center or not
          allowFontScaling={false} // optional
          placeholder={'Apr 27, 2018 → Jul 10, 2018'}
          mode={this.state.switchValue ? 'range' : 'single'}
          ref="child"
        />

      </View>
    )
  }
}

export default GoBackField