import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {BackButton, Logo} from '../../../assets/icon';
import IconOnly from './IconOnly';

const index = ({
  label,
  backgroundColor = '#02CF8E',
  textColor = '#020202',
  onPress,
  type,
  icon,
}) => {
  if (type === 'icon-only') {
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
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default index;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor,
    borderRadius: 5,
    height: 42,
    width: 120,
    marginLeft: 140,
  }),
  label: textColor => ({
    textAlign: 'center',
    marginVertical: 5,
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: textColor,
  }),
});
