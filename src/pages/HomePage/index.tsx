import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Button, Gap, PageHeader, TextInput } from '../../components'; 

const HomePage = ({navigation, label}) => {
  return (
    <ScrollView style={styles.container}>
        <PageHeader type="withPhoto" />
        <View style={styles.contentWrapper}>
            <Gap height={26} />
            <View>
                <Gap height={26} />
                <Text style={styles.title1}>Today</Text>
                <Text style={styles.title2}>7 Task</Text>
                
            </View>
            <Gap height={24} />
        </View>
        
        <View style={styles.contentWrapper}>
            <Button label="Add New" backgroundColor="#FFCB62" textColor="#001D35" onPress={() => navigation.navigate('TaskPage')}/>
            <Gap height={26} />
            <Text style={styles.title1}>My Task</Text>
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
    title1: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24,
        color: '#020202',
        marginLeft: 2,
    },
    title2: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: 'grey',
        marginLeft: 2,
        marginBottom: -10,
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

export default HomePage