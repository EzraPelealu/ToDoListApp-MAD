import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Modal,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ButtonCreate, Gap, PageHeadertwo} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, push} from 'firebase/database';
import {Calendar} from 'react-native-calendars';

const TaskPage = () => {
  const [date, setDate] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();

  const handleCreateTask = () => {
    const db = getDatabase();
    const tasksRef = ref(db, 'tasks');

    push(tasksRef, {
      name: taskName,
      description: taskDescription,
      date: date, // Save selected date to Firebase
    })
      .then(() => {
        setTaskName('');
        setTaskDescription('');
        setDate('');
        navigation.goBack();
      })
      .catch(error => {
        console.error('Error adding task: ', error);
      });
  };

  const onDayPress = day => {
    // Function to handle date selection
    const selectedDate = day.dateString; // Assign the selected date to a variable
    setDate(selectedDate); // Update the date state with the selected date
    // Do not close modal after date selection
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeadertwo
        type="withLogo"
        label={'Create Task'}
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={16} />
      <View style={styles.contentWrapper}>
        <Calendar
          style={styles.calendar}
          onDayPress={onDayPress}
          markedDates={{
            [date]: {selected: true, selectedColor: '#FFCB62'},
          }}
        />
        <Text style={styles.task}>Task Date</Text>
        <View style={styles.selectDateContainer2}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.selectDateContainer3}>
              <View style={styles.selectDateContainer}>
                <Text style={styles.selectDate}>Select Date</Text>
              </View>
              <View>
                {date !== '' && <Text style={styles.selectedDate}>{date}</Text>}
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
        <Text style={styles.task}>Task Title</Text>
        <TextInput
          style={styles.input}
          placeholder={'write your task title here'}
          value={taskName}
          onChangeText={setTaskName}
        />
        <Text style={styles.task}>Task Description</Text>
        <TextInput
          style={styles.inputDes}
          placeholder={'write your task description here'}
          value={taskDescription}
          onChangeText={setTaskDescription}
          multiline={true}
          numberOfLines={4} 
          textAlignVertical="top" 
        />
        <Gap height={26} />
        <ButtonCreate
          label="Create Task"
          onPress={handleCreateTask}
          type={undefined}
          icon={undefined}
        />
        <Gap height={26} />
      </View>
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Calendar style={styles.calendar} onDayPress={onDayPress} />
            <ButtonCreate
              label="OK"
              onPress={() => setModalVisible(false)}
              type={undefined}
              icon={undefined}
            />
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
  task: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#001D35',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  inputDes: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    height: 150, // Set height to 150
    textAlignVertical: 'top', // Align text to top
  },
  calendar: {
    borderRadius: 10,
    marginTop: 10,
    marginVertical: 10,
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
  selectDateContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 5,
    alignItems: 'center',
    width: 100,
  },
  selectDateContainer2: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    backgroundColor: '#FFCB62',
    borderRadius: 8,
    padding: 5,
    alignItems: 'center',
  },
  selectDate: {
    fontSize: 14,
    color: '#001D35',
  },
  selectedDate: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#001D35',
    marginTop: 5,
    marginLeft: 10,
  },
  selectDateContainer3: {
    flexDirection: 'row',
  },
});

export default TaskPage;
