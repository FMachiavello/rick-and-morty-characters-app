import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const Post = ({ post }) => {


  return (
    <Pressable style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <View style={styles.listItemHeader}>
        <Image style={styles.listItemAuthorAvatar} source={{ uri: post.author.avatar }} />
          <Text style={styles.listItemAuthorName}>{post.author.fullname}</Text>
        </View>
      </View>
 
      <View style={styles.listItemBody}>
          <Image style={styles.listItemImage} source={{ uri: post.content }} />
      </View>
      <View style={styles.listItemFooter}>
        <Icon name="heart-outline" size={29} color="black" style={styles.gap} />
        <Icon name="chatbubble-outline" size={27} color="black" style={styles.gap2} />
        <Icon name="share-social-outline" size={28} color="black" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  secondContainer:{
    alignItems:'center',
  },
  mainContainer: {
    flex:1,
    alignItems:'center'
  },
  listItemHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8
  },
  listItemAuthorAvatar: {
    borderRadius: 42 / 2,
    height: 38,
    width: 38,
    marginRight: 12,
  },
  listItemAuthorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listItemBody: {
    flex: 1,
    maxHeight:400
  },
  listItemImage: {
    aspectRatio: 1,
    flex: 1,
    
  },
  listItemFooter: {
    padding: 8,
    paddingLeft: 16,
    flexDirection: 'row'
  },
  listItemFooterImage: {
    width: 28,
    height: 28
  },
  gap: {
    marginRight: 12
  },
  gap2: {
    marginRight: 8
  }
});

export default Post;
