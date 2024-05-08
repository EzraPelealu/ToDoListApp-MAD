import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Checklist from '../../../assets/icon/checklist'
import Gap from '../Gap';

const TaskDetail = ({
  label,
  labelone,
  labeltwo,
  backgroundColor
}) => {
  return (
    <View>
      <View style={styles.jenis(backgroundColor)}>
        <Text style={[styles.text, {width:88, height:27 }]}>{label}</Text>
        <View style={{width:185, height:44 }}>
          <Text style={[styles.text, { fontFamily: 'Poppins-Bold', } ]}>{labelone}</Text>
          <Text style={[styles.text]}>{labeltwo}</Text>
        </View>
        <TouchableOpacity style={{marginLeft:15}}>
          <Checklist />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default TaskDetail


const styles = StyleSheet.create({
  jenis: backgroundColor =>
  ({
    backgroundColor: backgroundColor,
    width: 341,
    height: 58,
    alignItems: 'center',
    marginVertical:10,
    flexDirection: 'row'
  }),
  text: {
    marginHorizontal:5,
    backgroundColor: '#FFFF',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',

  },


});
