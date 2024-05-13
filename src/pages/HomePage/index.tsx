import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Button, Gap, PageHeader, TaskDate, TaskDetail} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, onValue} from 'firebase/database';

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const db = getDatabase();
    const tasksRef = ref(db, 'tasks');

    onValue(tasksRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const taskList = Object.values(data);
        setTasks(taskList);
      } else {
        setTasks([]);
      }
    });

    return () => {
      tasksRef.off();
    };
  }, []);

  const goToTaskPage = () => {
    navigation.navigate('CreateTask');
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
            <Text style={styles.title1}>Today</Text>
            <Text style={styles.title2}>7 Task</Text>
          </View>
          <TouchableOpacity onPress={goToTaskPage}>
            <Button
              label="Add New"
              backgroundColor="#FFCB62"
              textColor="#001D35"
              onPress={() => navigation.navigate('CreateTask')}
            />
          </TouchableOpacity>
        </View>
        <Gap height={16} />
        <View style={styles.content1}>
          <TaskDate label={4} labelone={'Apr'} backgroundColor={'#FFCB62'} />
          <TaskDate label={7} labelone={'Mei'} backgroundColor={'#E7E7E7'} />
          <TaskDate label={10} labelone={'Jul'} backgroundColor={'#E7E7E7'} />
          <TaskDate label={12} labelone={'Des'} backgroundColor={'#E7E7E7'} />
        </View>
        <Gap height={26} />
        <Text style={styles.title1}>My Task</Text>
        <Gap height={16} />
        {tasks.map((task, index) => (
          <TaskDetail
            key={index}
            labelone={task.name}
            labeltwo={task.description}
            backgroundColor='#FFCB62'
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
    fontSize: 24,
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