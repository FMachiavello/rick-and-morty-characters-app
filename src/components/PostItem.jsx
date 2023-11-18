import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import StateDot from "./StateDot";
import SaveButton from "./SaveButton";
export const PostItem = ({ item }) => {
  return (
    <View style={styles.postContainer}>
      <Image style={styles.postImage} source={{ uri: item.image }} />
      <View style={styles.postTitleContainer}>
        <Text style={styles.postTitle}>{item.name}</Text>
        <SaveButton />
      </View>
      <StateDot status={item.status} />
      <Text style={styles.postMeta}>Last seen:</Text>
      <Text style={styles.postDescription}>{item.location.name}</Text>
      <Text style={styles.postMeta}>First seen:</Text>
      <Text style={styles.postDescription}>{item.origin.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postTitleContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  postContainer: {
    maxWidth: 800,
    margin: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  postImage: {
    padding: 30,
    width: 300,
    height: 300,
    borderRadius: 8,
    marginBottom: 10,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 5,
    paddingBottom: 10,
    flexDirection: "row",
  },
  postMeta: {
    fontSize: 14,
    color: "#777",
  },
});
