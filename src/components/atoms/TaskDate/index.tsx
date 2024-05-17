import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TaskDate = ({label, labelone, backgroundColor}) => {
  return (
    <View>
      <View style={styles.jenis(backgroundColor)}>
        <Text style={styles.text}>{label}</Text>
        <Text style={styles.textdua}>{labelone}</Text>
      </View>
    </View>
  );
};

export default TaskDate;

const styles = StyleSheet.create({
  jenis: backgroundColor => ({
    backgroundColor: backgroundColor,
    width: 68,
    height: 62,
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.10,
    shadowRadius: 3,
    elevation: 5,
  }),
  text: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
  textdua: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});
