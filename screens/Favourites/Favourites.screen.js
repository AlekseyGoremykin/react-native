import React from 'react';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './Favourites.styles';

const someItems = ['Startup Summer', 'Memes'];

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={require('../../assets/logo.png')} />
        </View>
        <Text style={styles.title}>Favourites</Text>
        <Text style={styles.subtitle}>We all love</Text>
        {someItems.map(item => (
          <TouchableOpacity
            key={item}
            style={styles.button}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default HomeScreen;
