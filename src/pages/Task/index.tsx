import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ButtonTask, Gap, PageHeader} from '../../components';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getDatabase, ref, set} from 'firebase/database';

const TaskPage = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const {task} = route.params;

  useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setTaskDescription(task.description);
      setTaskDate(task.date);
    }
  }, [task]);

  const handleEditTask = () => {
    const db = getDatabase();
    const taskRef = ref(db, `tasks/${task.id}`);

    set(taskRef, {
      name: taskName,
      description: taskDescription,
      date: taskDate,
      completed: task.completed, // maintain the completion status
    })
      .then(() => {
        navigation.goBack();
      })
      .catch(error => {
        console.error('Error updating task: ', error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeader type="withLogo2" />
      <Gap height={26} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Task Name</Text>
        <TextInput
          style={styles.input}
          value={taskName}
          onChangeText={setTaskName}
        />
      </View>
      <Gap height={16} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Task Description</Text>
        <TextInput
          style={styles.input}
          value={taskDescription}
          onChangeText={setTaskDescription}
          multiline
          numberOfLines={4}
        />
      </View>
      <Gap height={16} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Task Date</Text>
        <TextInput
          style={styles.input}
          value={taskDate}
          onChangeText={setTaskDate}
        />
      </View>
      <Gap height={36} />
      <View style={styles.buttonContainer}>
        <ButtonTask
          label="Edit Task"
          backgroundColor="#FFCB62"
          textColor="#000000"
          onPress={handleEditTask}
        />
      </View>
      <Gap height={48} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    paddingHorizontal: 24,
  },
  label: {
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
    fontFamily: 'Poppins-Regular',
    color: '#333',
    marginBottom: 20,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default TaskPage;
