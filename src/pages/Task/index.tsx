import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Button, Gap, PageHeader, PageFooter, TextInput } from '../../components'; 
import {useNavigation} from '@react-navigation/native';

const TaskPage = () => {
    const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
        {/* <PageHeader type="withPhoto" /> */}
        {/* <Gap height={24} /> */}
        <View style={styles.contentWrapper}>
            <Gap height={26} />
            <View>
                <Text style={styles.title}>Task</Text>
                <Gap height={26} />
                <TextInput label="Task Name" placeholder="Fitness"/>
                <Gap height={16} />
                <TextInput label="Task Description" placeholder="Exercise and Gym"/>
            </View>
            <Gap height={24} />
        </View>
        <Gap height={24} />
        <View style={styles.contentWrapper}>
            <Gap height={26} />
            <Text style={styles.containerText4}>Add Transaction</Text>
            <Button label="Cash On Hand" backgroundColor="#02CF8E" textColor="#000000" onPress={() => navigation.navigate('CashOnHand')}/>
            <Gap height={18} />
            <Button label="Cash On Bank" backgroundColor="#02CF8E" textColor="#000000" onPress={() => navigation.navigate('CashOnBank')}/>
        </View>
        <Gap height={26} />
        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentWrapper: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingHorizontal: 24,
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
        color: '#020202',
        textAlign: 'center',
      },
    containerText: {
        color: '#000000',
        fontFamily: 'Poppins-Light'
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

export default TaskPage