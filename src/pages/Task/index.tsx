import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { ButtonTask, Gap, PageHeader, TextInput, TextInput2, TextInputDateTime } from '../../components'; 
import {useNavigation} from '@react-navigation/native';

const TaskPage = ( {navigation, label, backButton, onPress, style}) => {
    // const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
        <View style={styles.contentWrapper}>
            <Gap height={16} />
            <View>
                {/* <View style={styles.container}>
                    {backButton && (
                        <Button type="icon-only" icon="icon-back" onPress={onPress} style={[styles.backButton, style]} />
                    )}
                    <Text style={styles.label}>{label}</Text>
                </View> */}
                <PageHeader type="withLogo2"/>
                <Gap height={26} />
                <TextInput label="Task Name" placeholder="Fitness"/>
                <Gap height={16} />
                <TextInput2 label="Task Description" placeholder="Exercise and Gym"/>
            </View>
            <Gap height={24} />
        </View>
        <View style={styles.contentWrapper}>
            <Gap height={6} />
            <View style={styles.dateAndTimeContainer}>
                <TextInputDateTime label="Task Date" placeholder="04 / April / 2024"/>
                <TextInputDateTime label="Task Time" placeholder="6:00 - 07:30"/>
            </View>
            <Gap height={36} />
            <View style={styles.buttonContainer}>
                <ButtonTask label="Edit Task" backgroundColor="#FFCB62" textColor="#000000" onPress={() => navigation.navigate('')} />
                <ButtonTask label="Delete Task" backgroundColor="#FFCB62" textColor="#000000" onPress={() => navigation.navigate('')}/>
            </View>
            <Gap height={48} />
        </View>
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
        fontSize: 13,
        textAlign: 'left',
    },
    dateAndTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
      },
    backButton: {
        marginLeft: 10, // Memberikan margin ke kiri
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    // button: {
    //     flex: 1,
    //     marginHorizontal: 5,
    //     height: 50,
    //     borderRadius: 8,
    //     alignItems: 'center',
    //     justifyContent: 'center', 
    // },
});

export default TaskPage