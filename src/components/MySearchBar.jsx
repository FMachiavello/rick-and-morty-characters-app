import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";

const MySearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        style={styles.SearchBar}
        placeholder="Search..."
        onChangeText={handleSearch}
        value={searchText}
        platform="android"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SearchBar: {
    padding: 10,
  },
});

export default MySearchBar;
