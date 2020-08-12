import React, { useEffect, useCallback, useState }  from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import fetchMarvel from '../../fetchMarvel';

import styles from './Home.styles';
import { ScrollView } from 'react-native-gesture-handler';

let someItems = ['Paralect', 'Startup Summer', 'Dan Krachkouski', 'Memes', 'Котики'];

function HomeScreen() {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);

  const fetchData = useCallback(async () => {
    const { data } = await fetchMarvel('/characters');
    setItems(data.data.results);
    console.log(data.data.results[1])
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={require('../../assets/logo.png')} />
        </View>
        <Text style={styles.title}>Featured characters</Text>
        {items.map(item => (
          <TouchableOpacity
            // key={item}
            style={styles.button}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <View style={styles.item}>
              <Image style={styles.photo} source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}} />
              <Text style={styles.charactersName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
