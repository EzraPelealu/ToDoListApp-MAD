import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { BackButton, Logo } from '../../../assets/icon';
import IconOnly from './IconOnly';

const index = ({
  label,
  backgroundColor = '#02CF8E',
  textColor = '#020202',
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
      style={styles.container(backgroundColor)}
      activeOpacity={0.7}
      onPress = {onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
  }),
});