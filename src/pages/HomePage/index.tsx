import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button, Gap, PageHeader, TaskDetail, TaskDate} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, onValue, off, set} from 'firebase/database';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const db = getDatabase();
    const tasksRef = ref(db, 'tasks');
    return onValue(
      tasksRef,
      snapshot => {
        const data = snapshot.val() || {};
        setTasks(Object.entries(data).map(([id, task]) => ({id, ...task})));
      },
      {
        onlyOnce: false,
        onError: error => console.error(error),
      },
    );
  }, []);

  const uniqueDates = [...new Set(tasks.map(task => task.date))];
  const filterTasksByDate = () =>
    tasks.filter(task => task.date === selectedDate);
  const goToCreateTask = () => navigation.navigate('CreateTask');
  const handleDatePress = date => setSelectedDate(date);

  const handleCheckboxChange = (taskId, newValue) => {
    const db = getDatabase();
    const taskRef = ref(db, `tasks/${taskId}`);

    set(taskRef, {
      ...tasks.find(task => task.id === taskId),
      completed: newValue,
    }).catch(error => {
      console.error('Error updating task: ', error);
    });
  };

  const renderTaskCount = () =>
    tasks.filter(task => task.date === selectedDate).length;

  return (
    <ScrollView style={styles.container}>
      <PageHeader type="withLogo" />
      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <View style={styles.dateSelectorContainer}>
          <View>
            <Text style={styles.title1}>{selectedDate || 'Today'}</Text>
            <Text style={styles.title2}>{renderTaskCount()} Task(s)</Text>
          </View>
          <View>
            <Button
              label="Add New"
              backgroundColor="#FFCB62"
              textColor="#001D35"
              onPress={goToCreateTask}
            />
          </View>
        </View>
        <Gap height={16} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}>
          <View style={styles.dateButtonsContainer}>
            {uniqueDates.map((date, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleDatePress(date)}
                style={styles.dateButton}>
                <TaskDate
                  label={date}
                  backgroundColor={
                    selectedDate === date ? '#FFCB62' : '#E7E7E7'
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <Gap height={26} />
        <Text style={styles.title1}>My Tasks</Text>
        <Gap height={16} />
        {filterTasksByDate().map((task, index) => (
          <View key={index} style={styles.taskContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TaskPage', {task})}>
              <TaskDetail
                label={task.date}
                labelone={task.name}
                labeltwo={task.description}
                backgroundColor="#FFCB62"
                task={task}
                handleCheckboxChange={handleCheckboxChange} // Pass handleCheckboxChange function
              />
            </TouchableOpacity>
          </View>
        ))}
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
    marginHorizontal: 24,
  },
  dateSelectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  dateButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
  },
  dateButton: {
    marginBottom: 15, // Jarak antar baris
    marginRight: 15, // Jarak antar kolom
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#020202',
  },
  title2: {
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    fontSize: 14,
  },
  // title23:{
  //   fontFamily: 'Poppins-Medium',
  //   color: '#020202',
  //   marginTop: -1,
  //   fontSize: 14,
  //   marginBottom: -40,
  //   marginHorizontal: -50,
  //   // marginRight: 50,
  // },
});

export default HomePage;
