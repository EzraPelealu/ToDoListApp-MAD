import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Button} from '../../atoms';



const PageHeader = ({label, backButton, onPress, type}) => {
  if (type === 'withLogo') {
    return (
      <View style={styles.containerTop}>
        <Image
          style={styles.profilePic}
          source={require('../../../assets/icon/ProfileLogo.png')}
        />
        <Text style={styles.title}>To Do List</Text>
        <View style={styles.containerwithPhoto}></View>

        <Image
          style={styles.clockLogo}
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

export default PageHeader;

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
    marginLeft: 24,
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
    fontFamily: 'Poppins-Medium',
    fontSize: 28,
    color: '#001D35',
    textAlign: 'center',
    fontWeight: 'bold',
    // marginLeft: 30,
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
  clockLogo: {
    marginRight: 30,
    borderWidth: 10,
    borderRadius: 10,
    marginLeft: 26,
  },
  containerTop: {
    backgroundColor: '#FFFFFF',
    // paddingLeft: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,

    // flexDirection: 'row',
    // alignItems: 'center',
    // marginLeft: 26,
  },
});