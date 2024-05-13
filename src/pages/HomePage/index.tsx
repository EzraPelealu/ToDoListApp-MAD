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
import {getDatabase, ref, onValue, off} from 'firebase/database'; // Pastikan ref dan off diimpor

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const db = getDatabase();
    const tasksRef = ref(db, 'tasks');

    const unsubscribe = onValue(tasksRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const taskList = Object.values(data);
        setTasks(taskList);
      } else {
        setTasks([]);
      }
    });

    return () => {
      // Pastikan tasksRef tidak null sebelum mencoba memanggil off()
      if (tasksRef) {
        off(tasksRef, 'value', unsubscribe);
      }
    };
  }, []);

  const uniqueDates = [...new Set(tasks.map(task => task.date.split(' ')[0]))];

  const filterTasksByDate = () => {
    return tasks.filter(task => task.date === selectedDate);
  };

  const goToTaskPage = () => {
    navigation.navigate('CreateTask');
  };

  const handleDatePress = date => {
    setSelectedDate(date);
  };

  const renderTaskCount = () => {
    const taskCount = tasks.filter(task => task.date === selectedDate).length;
    return taskCount;
  };

  return (
    <ScrollView style={styles.container}>
      <PageHeader type="withLogo" />
      <View style={styles.contentWrapper}>
        <Gap height={26} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={styles.title1}>
              {selectedDate !== '' ? selectedDate : 'Today'}
            </Text>
            <Text style={styles.title2}>{renderTaskCount()} Task</Text>
          </View>
          <TouchableOpacity onPress={goToTaskPage}>
            <Button
              label="Add New"
              backgroundColor="#FFCB62"
              textColor="#001D35"
              onPress={() => navigation.navigate('TaskPage')}
            />
          </TouchableOpacity>
        </View>
        <Gap height={16} />
        <View style={styles.content1}>
          {uniqueDates.map((date, index) => (
            <TouchableOpacity key={index} onPress={() => handleDatePress(date)}>
              <TaskDate
                label={date}
                labelone={date}
                backgroundColor={selectedDate === date ? '#FFCB62' : '#E7E7E7'}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Gap height={26} />
        <Gap height={26} />
        <Text style={styles.title1}>My Task</Text>
        <Gap height={16} />
        {filterTasksByDate().map((task, index) => (
          <TaskDetail
            key={index}
            label={task.date}
            labelone={task.name}
            labeltwo={task.description}
            backgroundColor="#FFCB62"
            
          />
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
  content1: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginTop: -10,
    color: '#020202',
  },
  title2: {
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    marginTop: -10,
    fontSize: 14,
    marginBottom: -10,
  },
});

export default HomePage;
