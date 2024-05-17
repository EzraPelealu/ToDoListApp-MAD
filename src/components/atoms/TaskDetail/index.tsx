import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
// import {CheckBox} from 'react-native-elements';
// import {CheckBox} from '../../../assets/icon';
import {CheckBox} from 'react-native-elements';

import Gap from '../Gap';

const TaskDetail = ({
  label,
  labelone,
  labeltwo,
  backgroundColor,
  task,
  handleCheckboxChange,
}: {
  label: string;
  labelone: string;
  labeltwo: string;
  backgroundColor: string;
  task: any; // Replace 'any' with the actual type of 'task'
  handleCheckboxChange: any; // Replace 'any' with the actual type of 'handleCheckboxChange'
}) => {
  return (
    <View>
      {/* <View style={styles.jenis(backgroundColor)}> */}
      

      <View style={[styles.containerTask, {backgroundColor: backgroundColor}]}>

        <View style={styles.containerDalamTaskDetail}>
          
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={[styles.text]}>Date:  {label} </Text>
            <Text style={[styles.text, {fontFamily: 'Poppins-Bold'}]}>Task Title:    {labelone}
            </Text>
            <Text style={[styles.tex2]}>Description:  {labeltwo}</Text>
          </View>

          <TouchableOpacity style={{marginLeft: 15}}>
            <CheckBox
              checked={task.completed}
              onPress={() => handleCheckboxChange(task.id, !task.completed)}
              // containerStyle={styles.checkboxContainer}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  // jenis: backgroundColor => ({
  //   backgroundColor: backgroundColor,
  //   width: 341,
  //   height: 58,
  //   alignItems: 'center',
  //   marginVertical: 10,
  //   flexDirection: 'row',
  // }),
  containerDalamTaskDetail: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // width: '100%',
    // paddingHorizontal: 15,
  },
  containerTask: {
    backgroundColor: '#FFCB62',
    width: 341,
    // height: 'auto', // Optionally, remove this line
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    paddingVertical: 10, // Added padding to ensure proper spacing
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    marginHorizontal: 5,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  tex2: {
    marginHorizontal: 5,
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#27374D',
  },
  checkboxContainer: {
    // backgroundColor: 'black',
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
});
