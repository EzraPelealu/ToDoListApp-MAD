import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Button } from '../../atoms';
import {useNavigation} from '@react-navigation/native';


const PageHeader = ({label, backButton, onPress, type}) => {
  const navigation = useNavigation();
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
  if (type === 'withLogo2') {
    return (
      // <View style={styles.containerTop}>
      //   <Image
      //     style={styles.profilePic}
      //     source={require('../../../assets/icon/back.png')}
      //   />
      //   <Text style={styles.title2}>Task</Text>
      //   <View style={styles.containerwithPhoto}></View>

      //   <Image
      //     source={require('../../../assets/icon/ClockLogo.png')}
      //   />
      // </View>


      <View style={styles.containerTop}>
        <PageHeader
          style={styles.backButton}
          backButton={true}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title2}>Task</Text>
        {/* <View style={styles.container}>
          {backButton && (
            <Button type="icon-only" icon="icon-back" onPress={onPress} style={[styles.backButton, style]} />
          )}
          <Text style={styles.label}>{label}</Text>
        </View> */}
        <Image
          style={styles.clockLogo}
          source={require('../../../assets/icon/ClockLogo.png')}
        />
      </View>
    );
  }
  // if (label === 'HomePage') {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.label}>{label}</Text>
  //     </View>
  //   );
  // }
  return (
    <View style={styles.container}>
      {backButton && (
        <Button type="icon-only" icon="icon-back" onPress={onPress} style={styles.backButton} />
      )}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};


export default PageHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginRight: 70,
    paddingLeft: 1,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#020202',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
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
  title2: {
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
  clockLogo: {
    marginRight: 16,
    borderWidth: 10,
    borderRadius: 10,
    marginLeft: 26,
  },


  // containerwithPhoto: {
  //   backgroundColor: '#FFFFFF',
  //   paddingVertical: 37,
  //   flexDirection: 'column',
  // },
  // title: {
  //   fontFamily: 'Poppins-Medium',
  //   fontSize: 20,
  //   color: 'black',
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   // marginLeft: 30,
  //   marginRight: 'auto',
  // },
  // profilePic: {
  //   width: 12,
  //   height: 20,
  //   marginRight: 'auto',
  //   // borderColor: 'black',
  // },
  
  // containerTop: {
  //   backgroundColor: '#FFFFFF',
  //   // paddingLeft: 24,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   paddingHorizontal: 24,

  //   // flexDirection: 'row',
  //   // alignItems: 'center',
  //   // marginLeft: 26,
  // },
  
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


  backButton: {
    width: 12,
    height: 20,
    marginRight: 'auto',
    // borderColor: 'black',
  },
});

