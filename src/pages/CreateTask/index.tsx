import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, TextInput} from 'react-native';
import {ButtonCreate, Gap, PageHeadertwo} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, push} from 'firebase/database';

const TaskPage = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const navigation = useNavigation();

  const handleCreateTask = () => {
    const db = getDatabase();
    const tasksRef = ref(db, 'tasks');

    push(tasksRef, {
      name: taskName,
      description: taskDescription,
    })
      .then(() => {
        setTaskName('');
        setTaskDescription('');
        navigation.goBack();
      })
      .catch(error => {
        console.error('Error adding task: ', error);
      });
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
        <Gap height={16} />
        <TextInput
          style={styles.input}
          placeholder={'Name Task'}
          value={taskName}
          onChangeText={setTaskName}
        />
        <TextInput
          style={styles.input}
          placeholder={'Task Description'}
          value={taskDescription}
          onChangeText={setTaskDescription}
        />
        <Gap height={26} />
        <ButtonCreate label="Create Task" onPress={handleCreateTask} />
        <Gap height={26} />
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});

export default TaskPage;
