import React from 'react';
import {StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {
  Button,
  Gap,
  PageHeader,
  TextInput,
  TaskDate,
  TaskDetail,
} from '../../components';

const HomePage = ({navigation, label}) => {

  const goToTaskPage = () => {
    navigation.navigate('TaskPage'); // Navigate to TaskPage
  };
  return (
    <ScrollView style={styles.container}>

      <PageHeader type="withLogo" />
      <View style={styles.contentWrapper}>
        {/* <Gap height={26} /> */}
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.title1}>Today</Text>
            <Text style={styles.title2}>7 Task</Text>
          </View>
          <View>
            <Button
              label="Add New"
              backgroundColor="#FFCB62"
              textColor="#001D35"
              onPress={() => navigation.navigate('CreateTask')}
            />
          </View>
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
        <TouchableOpacity onPress={goToTaskPage}>
          <TaskDetail
            label={'6:00 - 07:30'}
            labelone={'   Fitness'}
            labeltwo={'   Exercise and Gym'}
            backgroundColor={'#FFCB62'}
          />
        </TouchableOpacity>
        <TaskDetail
          label={'6:00 - 07:30'}
          labelone={'   Fitness'}
          labeltwo={'   Exercise and Gym'}
          backgroundColor={'#E7E7E7'}
        />
        <TaskDetail
          label={'6:00 - 07:30'}
          labelone={'   Fitness'}
          labeltwo={'   Exercise and Gym'}
          backgroundColor={'#E7E7E7'}
        />
        <TaskDetail
          label={'6:00 - 07:30'}
          labelone={'   Fitness'}
          labeltwo={'   Exercise and Gym'}
          backgroundColor={'#E7E7E7'}
        />
        <TaskDetail
          label={'6:00 - 07:30'}
          labelone={'   Fitness'}
          labeltwo={'   Exercise and Gym'}
          backgroundColor={'#E7E7E7'}
        />
        <TaskDetail
          label={'6:00 - 07:30'}
          labelone={'   Fitness'}
          labeltwo={'   Exercise and Gym'}
          backgroundColor={'#E7E7E7'}
        />
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
  containerText: {
    color: '#000000',
    fontFamily: 'Poppins-Light',
  },
  containerText1: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  containerText2: {
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    textAlign: 'center',
  },
  containerText3: {
    color: '#000000',
    fontFamily: 'Poppins-Light',
    fontSize: 14,
  },
  containerText4: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
});

export default HomePage;
