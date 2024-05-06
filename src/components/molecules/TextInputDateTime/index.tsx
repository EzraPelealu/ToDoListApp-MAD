import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInputDateTime = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

export default TextInputDateTime;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#020202',
    marginBottom: 6,
  
  },
  textInput: {
    borderColor: '#CBCBCB',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 26,
    paddingRight: 26,
    paddingVertical: 8,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#8D92A3',
  },
 
});