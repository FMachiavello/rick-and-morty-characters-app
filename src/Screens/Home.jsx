import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";
import Post from "../components/Post";
import axios from "axios";

const Home = () => {
  const [character, setCharacter] = useState([]);

  function obtenerListaNumerosRandom() {
    const listaNumeros = [];
    const cantidadNumeros = 6;

    for (let i = 0; i < cantidadNumeros; i++) {
      const numeroRandom = Math.floor(Math.random() * 100);
      listaNumeros.push(numeroRandom);
    }
    return listaNumeros;
  }

  const listaRandom = obtenerListaNumerosRandom();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${listaRandom}`
        );
        setCharacter(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchCharacters();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>The Rick and Morty API!</Text>
      <Post characters={character} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
    alignItems: "center",
  },

  title: {
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Home;
