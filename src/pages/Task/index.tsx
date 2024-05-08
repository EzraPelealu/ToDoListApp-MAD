import React from 'react';
import {StyleSheet, View, ScrollView, Text, Modal} from 'react-native';
import {
  Button,
  Gap,
  PageHeader,
  TextInput,
  TextInputDateTime,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';

const TaskPage = () => {
  const [tanggal, setTanggal] = React.useState(true);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <PageHeader type="withLogo" label={'Create Task'} />
      <Gap height={16} />
      <View style={styles.contentWrapper}>
        <Calendar
          style={styles.calendar}
          onDayPress={date => console.log(date)}
        />
        <Text style={styles.title}>Time</Text>
        <View style={styles.time}>
          <Text style={styles.textbox}>6:00 - 07:30</Text>
        </View>
        <Gap height={6} />
        <TextInput label={'Task Name'} placeholder={'Name Task'} />
        <TextInput
          label={'Task Deskription'}
          placeholder={'Task Description'}
          height={171}
        />
        <Gap height={26} />
        <Button label="Create Task" />
        <Gap height={26} />
      </View>
      <Modal visible={tanggal} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Calendar
              style={{borderRadius: 10}}
              onDayPress={date => console.log(date)}
              color="white"
            />
            <Button label="OK" onPress={() => setTanggal(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    color: 'black',
    textAlign: 'center',
  },
  textbox: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: 'black',
  },
  time: {
    borderWidth: 2,
    borderRadius: 4,
    marginTop: -3,
    borderColor: '#D9D9D9',
    padding: 7,
    width: 118,
    height: 37,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  calendar: {
    borderRadius: 10,
    marginTop: 10,
    marginVertical: 10,
  },
});

export default TaskPage;
