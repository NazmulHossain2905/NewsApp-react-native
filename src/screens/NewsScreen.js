import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopTabNavigators from '../navigators/TopTabNavigators';

const NewsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>World News</Text>
      </View>
      <TopTabNavigators />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 70,
    backgroundColor: '#12A5E3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
});

export default NewsScreen;
