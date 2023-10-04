import React from 'react'
import MySearchBar from '../MySearchBar';
import { Text, View, StyleSheet, useColorScheme } from 'react-native';

const Search = () => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <MySearchBar style={isDarkMode ? styles.whiteText : styles.dark}/>
    </View>
  )
}

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF'
  },
  darkText: {
    color: '#000000'
  }
});