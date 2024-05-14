import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {
  Button,
  ButtonCreate,
  Gap,
  PageHeader,
  PageHeadertwo,
  TextInput,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {Calendar} from 'react-native-calendars';
import { getDatabase } from 'firebase/database';
import moment from 'moment';
// import TimePicker from '@tighten/react-native-time-input';
// import TimePicker from 'react-time-picker';


const TaskPage = () => {
    const [tanggal, setTanggal] = useState(true);
    const navigation = useNavigation();

  const [taskname, setTaskName] = useState('');
  const [taskdescription, setTaskDescription] = useState(''); 

  const onSubmit = () => {
    const data = {
      dateTime: moment().format('LLL'),
      taskname: taskname,
      taskdescription: taskdescription,
    };

    console.log(data);
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeadertwo type="withLogo" label={'Create Task'} backButton={true} onPress={() => navigation.goBack()} />
      <Gap height={16} />
      <View style={styles.contentWrapper}>
        <Calendar
          style={styles.calendar}
          onDayPress={date => console.log(date)}
        />
        {/* <Text style={styles.title}>Time</Text> */}
        {/* <TextInput
            label={'Time'}
            placeholder={'Name Task'}
        /> */}
        {/* <View>
          <TimeInput setCurrentTime onTimeChange={handleTimeChange} />
          <Text>Current time entered is: {time}</Text>
        </View> */}
   
        <Gap height={16} />

        {/* <View style={styles.time}> */}
        {/* <Text style={styles.textbox}>6:00 - 07:30</Text> */}
        {/* </View> */}
        <Gap height={6} />
        <TextInput label={'Task Name'} placeholder={'Name Task'} value={taskname} onChangeText={value => setTaskName(value)} />
        <TextInput
          //   style={{height: 171}}
          label={'Task Description'}
          placeholder={'Task Description'}
          value={taskdescription} onChangeText={value => setTaskDescription(value)}
          //   height={171}
        />
        <Gap height={26} />
        <ButtonCreate label="Create Task" onPress={onSubmit} />
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
            <ButtonCreate label="OK" onPress={() => setTanggal(false)} type={undefined} icon={undefined} />
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
