import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {ButtonCreate, Gap, PageHeader} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, push} from 'firebase/database';
import {Calendar} from 'react-native-calendars';

const CreateTask = () => {
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
      date: date,
      completed: false, // Menambahkan default completion status
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
    setDate(day.dateString);
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeader
        type="withLogo2"
        label="Create Task"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <Gap height={16} />
      
      <View style={styles.contentWrapper}>
        <Text style={styles.task}>Task Date</Text>
        
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={styles.input}>
            <Text style={styles.inputText}>{date || 'Select Date'}</Text>
          </View>
        </TouchableOpacity>
        <Gap height={20} />
        <Text style={styles.task}>Task Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Write your task title here"
          value={taskName}
          onChangeText={setTaskName}
        />
        <Text style={styles.task}>Task Description</Text>
        <TextInput
          style={styles.inputDes}
          placeholder="Write your task description here"
          value={taskDescription}
          onChangeText={setTaskDescription}
          multiline={true}
          numberOfLines={4}
        />
        <Gap height={26} />
        <ButtonCreate label="Create Task" onPress={handleCreateTask} />
        <Gap height={26} />
      </View>
      {/* <Modal visible={modalVisible} animationType="fade" transparent>
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
      </Modal> */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Calendar style={styles.calendar} onDayPress={onDayPress} />
          <ButtonCreate label="OK" onPress={() => setModalVisible(true)} />
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
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333',
  },
  inputText: {
    color: '#001D35',
  },
  inputDes: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    height: 150,
    textAlignVertical: 'top',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#333333',
  },
  calendar: {
    borderRadius: 10,
    marginTop: 10,
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default CreateTask;
