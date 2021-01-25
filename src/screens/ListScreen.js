import React from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import BlogItem from "../component/BlogItem";

function ListScreen({ navigation }) {
  const blogposts = [
    {
      blogImage: require("../assets/akshar-dave-1GRvY9WUu08-unsplash.jpg"),
      blogTitle: "Does Dry in January Actually Improve Your Health?",
      authorImage: require("../assets/Graphic1.jpg"),
      authorName: "Kylie Jenner",
      readTime: "4",
    },
    {
      blogImage: require("../assets/amy-shamblen-qdPnQuGeuwU-unsplash.jpg"),
      blogTitle: "How to Seem Like You Always Have Your Shot Together",
      authorImage: require("../assets/Graphic1.jpg"),
      authorName: "Ada Lacey",
      readTime: "8",
    },
    {
      blogImage: require("../assets/dose-juice-ocnsb17U6FE-unsplash.jpg"),
      blogTitle: "Does Dry is January Actally Improve Your Health?",
      authorImage: require("../assets/Graphic1.jpg"),
      authorName: "Will Smith",
      readTime: "90",
    },
    {
      blogImage: require("../assets/amy-shamblen-lJt-3NUFng4-unsplash.jpg"),
      blogTitle: "You do hire a designer to make something. You Hire Them.",
      authorImage: require("../assets/Graphic1.jpg"),
      authorName: "Kendall Jenner",
      readTime: "13",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={blogposts}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("InfoScreen",{post:item});
              }}
            >
              <BlogItem post={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  info: {
    fontSize: 16,
  },
  groupicons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
});
