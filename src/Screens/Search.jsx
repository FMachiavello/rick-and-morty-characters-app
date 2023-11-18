// App.js
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";
import SearchComponent from "../components/SearchComponent";
import Post from "../components/Post";

const Search = () => {
  const [character, setCharacter] = useState([]);

  const searchCharacters = async ({ name }) => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      setCharacter(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <SearchComponent onSearch={searchCharacters} />
      <View style={styles.container2}>
        <Post characters={character} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: "#fff",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Search;
