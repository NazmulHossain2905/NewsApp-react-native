import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

import moment from 'moment';

import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailsScreen = ({route, navigation}) => {
  const item = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={30}
          color="#fff"
        />
        <Text style={styles.text}>World News</Text>
        <AntDesign name="arrowleft" size={30} color="transparent" />
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.detailsContainer}>
          <Image
            resizeMode="cover"
            style={{width: '100%', height: 200}}
            source={{uri: item?.urlToImage}}
          />
          <View style={styles.textPart}>
            <Text style={styles.title}>{item?.title}</Text>
            <View style={styles.publisherAndDateContainer}>
              <Text
                style={[styles.publisherAndDate, {flex: 1, marginRight: 8}]}>
                <Text style={{fontFamily: 'Poppins-Bold'}}>Publisher: </Text>
                {item?.source?.name}
              </Text>
              <Text style={styles.publisherAndDate}>
                {moment(item?.publishedAt).startOf('hour').fromNow()}
              </Text>
            </View>
            {item?.author != null && (
              <Text style={[styles.publisherAndDate]}>
                <Text style={{fontFamily: 'Poppins-Bold'}}>Author: </Text>
                {item?.author}
              </Text>
            )}
            {item?.description != null && (
              <Text
                style={[
                  styles.publisherAndDate,
                  {color: '#111', fontSize: 16},
                ]}>
                <Text style={{fontFamily: 'Poppins-Bold'}}>Description: </Text>
                {item?.description}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          onPress={async () => {
            await Linking.openURL(item?.url);
          }}
          style={styles.readMoreBtn}>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 18,
    backgroundColor: '#12A5E3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 25,
    color: '#fff',
    fontFamily: 'Poppins-Bold',
  },
  detailsContainer: {
    marginBottom: 25,
    backgroundColor: '#f2f2f2',
  },
  textPart: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    color: '#111',
    fontFamily: 'Poppins-Bold',
    lineHeight: 28,
  },
  publisherAndDateContainer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
  },
  publisherAndDate: {
    fontFamily: 'Poppins-Medium',
    color: '#12A5E3',
  },
  btnContainer: {
    alignItems: 'center',
  },
  readMoreBtn: {
    backgroundColor: '#12A5E3',
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 30,
  },
  readMoreText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
});

export default DetailsScreen;
