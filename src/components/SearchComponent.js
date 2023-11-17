import React, { useState } from 'react';
import { View, StyleSheet , Button} from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchComponent = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleSearch = () => {
    onSearch({ name });
  };

  return (
    <View style={styles.container}>
      <SearchBar style={styles.SearchBar}
        placeholder="Search by name..."
        onChangeText={(text) => setName(text)}
        value={name}
        platform="android"
      />
      <Button title="Buscar" onPress={handleSearch}  style={styles.SearchButton}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SearchBar: {
    padding:30,
    height:100,
    minWidth:400,

  },
  SearchButton : {
    padding:10,

  }
});

export default SearchComponent;
