// App.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, useColorScheme } from 'react-native';
import axios from 'axios';
import SearchComponent from '../SearchComponent';

const Search = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const [results, setResults] = useState([]);

  const searchCharacters = async ({ name, status }) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <SearchComponent onSearch={searchCharacters} style={isDarkMode ? styles.whiteText : styles.dark} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            {/* Puedes mostrar más detalles del personaje aquí */}
          </View>
        )}
      />
    </View>
  );
};

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

export default Search;
