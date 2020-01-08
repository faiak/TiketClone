import React from 'react';
import {Svg, G, Path} from 'react-native-svg';

export default ({stroke = 'blue', width = 32, height = 32}) => (
  <Svg height={height} width={width} viewBox="0 0 32 32">
    <G fill="none" fillRule="evenodd">
      <G stroke={stroke} strokeLinecap="round" strokeWidth="2">
        <Path d="M5 16s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="#fff" />
        <Path d="M16 13a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" fill="#fff" />
      </G>
    </G>
  </Svg>
);
