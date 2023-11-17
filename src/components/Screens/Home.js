import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import Post from '../Post'; 

const Home = () => {
  const samplePost = {
    postCategory: 1,
    content: 'https://apod.nasa.gov/apod/image/2310/WitchHead_Alharbi_1080.jpg',
    author: {
      avatar: 'https://www.nasa.gov/wp-content/uploads/2023/04/nasa-logo-web-rgb.png',
      fullname: 'Nasa',
    },
  };

  const handleItemClicked = (post) => {
    console.log('Clic en la publicación:', post);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Astronomy Picture Of The Day!</Text>
      <Post post={samplePost} onItemClicked={handleItemClicked} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    padding: 10,
    flex: 1,
  },
  title: {
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Home;
