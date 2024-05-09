import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput2 = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.textInput} placeholder={placeholder}/>
    </View>
  );
};

export default TextInput2;

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
    height: 190,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 150,
    paddingVertical: 54,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#8D92A3',
  },
});