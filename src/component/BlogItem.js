import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
const BlogItem = ({ post }) => {
  return (
    <View style={styles.mainBlogItemContainer}>
      <View style={styles.Lshape}>
        <View style={styles.LshapeOne} />
        <View style={styles.LshapeTwo} />
      </View>

      <View style={styles.blogContainer}>
        <View style={styles.imageContainer}>
          <Image source={post.blogImage} style={styles.imageOne} />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{post.blogTitle}</Text>
          <View style={styles.detailsContainer}>
            <View style={styles.authorContainer}>
              <Image source={post.authorImage} style={styles.authorImage} />
              <Text style={styles.authorName} numberOfLines={1}>
                {post.authorName}
              </Text>
            </View>
            <View style={styles.timeContainer}>
              <View style={styles.circle} />
              <Text style={styles.readTime}>{post.readTime} min read</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BlogItem;

const styles = StyleSheet.create({
  imageOne: {
    height: 115,
    width: 90,
  },
  blogContainer: {
    marginVertical: 15,
    marginLeft: 15,
    flexDirection: "row",
  },
  imageContainer: {},
  contentContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorImage: {
    width: 28,
    height: 28,
    borderRadius: 75,
    marginRight: 5,
  },
  circle: {
    width: 4,
    height: 4,
    backgroundColor: "gray",
    borderRadius: 30,
    marginRight: 10,
  },

  authorName: {
    fontSize: 16,
  },
  readTime: {
    opacity: 0.4,
  },
  mainBlogItemContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "white",
  },
  LshapeOne: {
    width: 80,
    height: 10,
    backgroundColor: "pink",
  },
  LshapeTwo: {
    width: 10,
    height: 80,
    backgroundColor: "pink",
  },
  Lshape: {
    position: "absolute",
  },
});
