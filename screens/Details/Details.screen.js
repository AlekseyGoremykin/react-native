import React from 'react';
import { Text, View, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';

import styles from './Details.styles';

function DetailsScreen() {
  const { params } = useRoute();
  const { item } = params;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={require('../../assets/logo.png')} />
        </View>
        <View style={styles.containerPhoto}>
          <Image style={styles.photo} source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}} />
          <Text style={styles.charactersName}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
}

export default DetailsScreen;
