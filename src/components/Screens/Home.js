import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image} from 'react-native';
import Post from '../Post'; 
import axios from 'axios';
import StateDot
 from '../StateDot';
const Home = () => {
 const [character,setCharacter] = useState([]);


 function obtenerListaNumerosRandom() {
  const listaNumeros = [];
  const cantidadNumeros = 6;

  for (let i = 0; i < cantidadNumeros; i++) {
    const numeroRandom = Math.floor(Math.random() * 100); // Puedes ajustar el rango según tus necesidades
    listaNumeros.push(numeroRandom);
  }

  return listaNumeros;
}

// Ejemplo de uso
const listaRandom = obtenerListaNumerosRandom()

 useEffect(()=>{
  const fetchCharacters = async()=>{  
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${listaRandom}`
      );
      setCharacter(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchCharacters();
 },[])

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>The Rick and Morty api</Text>
      <FlatList
      data={character}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.postContainer}>
          <Image style={styles.postImage} source={{ uri: item.image }}/>
          <Text style={styles.postTitle} >{item.name}</Text>
          <StateDot status={item.status}/>
          <Text style={styles.postMeta}>Last seen:</Text>
          <Text style={styles.postDescription} >{item.location.name}</Text>
          <Text style={styles.postMeta}>First seen:</Text>
          <Text style={styles.postDescription} >{item.origin.name}</Text>
        </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    padding: 10,
    flex: 1,
    alignItems: 'center'
  },
  postMeta: {
    fontSize: 14,
    color: '#777',
  },
  postContainer: {
    maxWidth: 800,
    margin: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
  }},
  title: {
    padding: 20,
    fontSize: 30 ,
    fontWeight: 'bold',
  },
  postImage: {
    padding: 30,
    width: 300,
    height:300,
    borderRadius: 8,
    marginBottom: 10,
  },

  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop:5,
    paddingBottom:10

  },
  postStatus: {
    fontSize: 18,
    fontWeight: '500',
  },
  postDescription: {
  }
});

export default Home;
