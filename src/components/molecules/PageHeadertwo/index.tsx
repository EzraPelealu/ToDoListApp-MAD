import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';
import {useNavigation} from '@react-navigation/native';


const PageHeadertwo = ({label, backButton, onPress, type}) => {
  const navigation = useNavigation();
  // const Image = ({backButton}) => {
    if (type === 'withLogo') {
      return (
        <View style={styles.containerTop}>
          <PageHeadertwo
            style={styles.backButton}
            backButton={true}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>{label}</Text>
          <View style={styles.containerwithPhoto}></View>

          <Image
            source={require('../../../assets/icon/ClockLogo.png')}
          />
        </View>
      );
    }

  if (label === 'HomePage') {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} />
      )}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default PageHeadertwo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 44,
  },
  containerwithPhoto: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 37,
    flexDirection: 'column',
  },
  labelWithBack: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
    marginLeft: 26,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#001D35',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 'auto',

  },
  text: {
    color: '#020202',
  },
  profilePic: {
    width: 60,
    height: 60,
    marginRight: 'auto',
    borderWidth: 10,
    borderRadius: 10,
    // borderColor: 'black',
  },
  backButton: {
    width: 12,
    height: 20,
    marginRight: 'auto',
    // borderColor: 'black',
  },
  
  containerTop: {
    backgroundColor: '#FFFFFF',
    // paddingLeft: 24,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,

    // flexDirection: 'row',
    // alignItems: 'center',
    // marginLeft: 26,
  },
});