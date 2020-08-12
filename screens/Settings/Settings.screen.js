import React, { useState } from 'react';
import { Text, View, Image} from 'react-native';

import styles from './Settings.styles';
import { TextInput } from 'react-native-gesture-handler';

function HomeScreen() {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
        <Text style={styles.title}>Settings</Text>
    </View>
  );
}

export default HomeScreen;
