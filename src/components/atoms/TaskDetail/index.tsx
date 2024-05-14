import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {CheckBox} from 'react-native-elements'; 
import Gap from '../Gap';

const TaskDetail = ({
  label,
  labelone,
  labeltwo,
  backgroundColor,
  task,
  handleCheckboxChange,
}) => {
  return (
    <View>
      <View style={styles.jenis(backgroundColor)}>
        <Text style={[styles.text, {width: 88, height: 27}]}>{label}</Text>
        <View style={{width: 185, height: 44}}>
          <Text style={[styles.text, {fontFamily: 'Poppins-Bold'}]}>
            {labelone}
          </Text>
          <Text style={[styles.tex2]}>{labeltwo}</Text>
        </View>
        <TouchableOpacity style={{marginLeft: 15}}>
          
          <CheckBox
            checked={task.completed}
            onPress={() => handleCheckboxChange(task.id, !task.completed)} 
            containerStyle={styles.checkboxContainer}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  jenis: backgroundColor => ({
    backgroundColor: backgroundColor,
    width: 341,
    height: 58,
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  }),
  text: {
    marginHorizontal: 5,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  tex2: {
    marginHorizontal: 10,
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
});
