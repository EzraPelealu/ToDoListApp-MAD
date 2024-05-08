import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { BackButton, Logo } from '../../../assets/icon';
import IconOnly from './IconOnly';

const index = ({
  label,
  onPress,
  type,
  icon
}) => {
  if (type === 'icon-only'){
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {icon === 'icon-back' && <BackButton />}
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress = {onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFCB62',
    borderRadius: 5,
    height:35,
    width:169,
    alignSelf:'center'
  },
  label: {
    textAlign: 'center',
    marginVertical:5,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: 'black',
  },
});