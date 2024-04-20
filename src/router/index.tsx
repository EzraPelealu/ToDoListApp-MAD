import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, HomePage, TaskPage} from '../pages';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="TaskPage"
        component={TaskPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;