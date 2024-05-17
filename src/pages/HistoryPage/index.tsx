// import React, {useEffect, useState} from 'react';
// import {StyleSheet, View, ScrollView, Text} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {getDatabase, ref, onValue} from 'firebase/database';
// import TaskDetail from '../../components/TaskDetail';
// // import Gap from '../../components/Gap';
// // import PageHeader from '../../components/PageHeader';

// const HistoryPage = () => {
//   const [completedTasks, setCompletedTasks] = useState([]);
//   const navigation = useNavigation();

//   useEffect(() => {
//     const db = getDatabase();
//     const tasksRef = ref(db, 'tasks');

//     const unsubscribe = onValue(tasksRef, snapshot => {
//       const data = snapshot.val();
//       if (data) {
//         const tasksArray = Object.keys(data).map(key => ({
//           id: key,
//           ...data[key],
//         }));
//         const completed = tasksArray.filter(task => task.completed);
//         setCompletedTasks(completed);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <ScrollView style={styles.container}>
//       {/* <PageHeader type="withLogo2" /> */}
//       {/* <Gap height={26} /> */}
//       <Text style={styles.title}>Completed Tasks</Text>
//       {/* <Gap height={16} /> */}
//       {completedTasks.map(task => (
//         <View key={task.id} style={styles.taskContainer}>
//           <TaskDetail
//             label={task.name}
//             labelone={task.description}
//             labeltwo={task.date}
//             backgroundColor="#FFCB62"
//           />
//           {/* <Gap height={10} /> */}
//         </View>
//       ))}
//       {/* <Gap height={48} /> */}
//     </ScrollView>
//   );
// };

// export default HistoryPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   title: {
//     fontSize: 24,
//     fontFamily: 'Poppins-Bold',
//     color: '#001D35',
//     paddingHorizontal: 24,
//   },
//   taskContainer: {
//     paddingHorizontal: 24,
//   },
// });
