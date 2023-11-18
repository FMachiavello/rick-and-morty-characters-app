import React from "react";
import { FlatList } from "react-native";
import { PostItem } from "./PostItem";

const Post = ({ characters }) => {
  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PostItem item={item} />}
    />
  );
};

export default Post;
