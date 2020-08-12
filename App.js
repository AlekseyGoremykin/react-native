import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './navigation';

function App() { 

  return (
        <NavigationContainer>
          <AppNavigation></AppNavigation>
        </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#202020',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default App;
