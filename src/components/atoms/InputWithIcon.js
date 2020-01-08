import React, {Component} from 'react';
import {View, Text} from 'react-native';
import * as Ico from '../../assets/icon';
class InputWithIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let IconComponent = Ico[this.props.icon.name];
    return (
      <View style={{flexDirection: 'row'}}>
        <IconComponent
          stroke={this.props.icon.stroke}
          width={this.props.icon.width}
          height={this.props.icon.height}
        />

        <Text>Testes</Text>
      </View>
    );
  }
}

export default InputWithIcon;
