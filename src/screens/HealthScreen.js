import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import moment from 'moment';

import {fetchNews} from '../utils/apiConfig';

const countryName = () => {
  const country = [
    'ae',
    'ar',
    'at',
    'au',
    'be',
    'bg',
    'br',
    'ca',
    'ch',
    'cn',
    'co',
    'cu',
    'cz',
    'de',
    'eg',
    'fr',
    'gb',
    'gr',
    'hk',
    'hu',
    'id',
    'ie',
    'il',
    'in',
    'it',
    'jp',
    'kr',
    'lt',
    'lv',
    'ma',
    'mx',
    'my',
    'ng',
    'nl',
    'no',
    'nz',
    'ph',
    'pl',
    'pt',
    'ro',
    'rs',
    'ru',
    'sa',
    'se',
    'sg',
    'si',
    'sk',
    'th',
    'tr',
    'tw',
    'ua',
    'us',
    've',
    'za',
  ];

  const random = Math.floor(Math.random() * country.length);
  return country[random];
};

const HealthScreen = ({navigation}) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    fetchNews(countryName(), 'health')
      .then(data => {
        setData({data: data});
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const RenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', item)}
        activeOpacity={0.7}
        style={styles.container}>
        <Image
          resizeMode="cover"
          style={{width: '100%', height: 200}}
          source={{uri: item?.urlToImage}}
        />
        <View style={styles.textPart}>
          <Text numberOfLines={2} style={styles.title}>
            {item?.title}
          </Text>
          <View style={styles.publisherAndDateContainer}>
            <Text
              numberOfLines={1}
              style={[styles.publisherAndDate, {flex: 1, marginRight: 8}]}>
              <Text style={{fontFamily: 'Poppins-Bold'}}>Publisher: </Text>
              {item?.source?.name}
            </Text>
            <Text style={styles.publisherAndDate}>
              {moment(item?.publishedAt).startOf('hour').fromNow()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={() => {
            fetchNews(countryName(), 'health').then(data => {
              setData({data: data});
            });
          }}
        />
      }
      data={data?.data}
      renderItem={({item}) => <RenderItem item={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    backgroundColor: '#f2f2f2',
    elevation: 2,
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
});

export default HealthScreen;
