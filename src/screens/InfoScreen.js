import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  EvilIcons,
  Fontisto,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
const InfoScreen = ({ route, navigation }) => {
  let { post } = route.params;
  return (
    <ScrollView  showsVerticalScrollIndicator={false} style={styles.mainBlogItemContainer}>
      <View>
        <View style={styles.Lshape}>
          <View style={styles.LshapeOne} />
          <View style={styles.LshapeTwo} />
        </View>

        <View style={styles.nav}>
          <View style={styles.firstNav}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{padding:6}}
            >
              <AntDesign name="left" size={24} color="red" />
            </TouchableOpacity>
            <Text style={styles.topic}>Beauty</Text>
          </View>
          <View style={styles.secondNav}>
            <MaterialIcons name="headset" size={24} color="red" />
            <EvilIcons name="heart" size={26} color="red" />
            <EvilIcons name="share-google" size={26} color="red" />
          </View>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View>
          <Image
            source={post.blogImage}
            style={styles.image}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{post.blogTitle}</Text>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.authorContainer}>
            <Image
              source={post.authorImage}
              style={styles.authorImage}
            />
            <Text style={styles.authorName} numberOfLines={1}>
            {post.authorName}
            </Text>
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.circle} />
            <Text style={styles.readTime}>{post.readTime} min read</Text>
          </View>
        </View>
        <View style={styles.postBodyContainer}>
          <Text style={styles.postBody}>
            This season differs from winter, because it is characterized by
            cold, dry,[4] dust-laden wind, and also wide fluctuations in the
            ambient temperatures of the day and night.{"\n\n"} Temperatures can
            easily be as low as 9 °C (48 °F) all day, but sometimes in the
            afternoon the temperature can also soar to as high as 30 °C (86 °F),
            while the relative humidity drops under 5%. It can also be hot in
            some regions, like in Sahara desert.[5] Harmattan haze over Ho,
            Ghana
            {"\n\n"} The air is particularly dry and desiccating when the
            Harmattan blows over the region.[4] The Harmattan brings desert-like
            weather conditions: it lowers the humidity, dissipates cloud cover,
            prevents rainfall formation and sometimes creates big clouds of dust
            which can result in dust storms or sandstorms.[citation needed]
            {"\n\n"} The wind can increase fire risk[6] and cause severe crop
            damage.[7] The interaction of the Harmattan with monsoon winds can
            cause tornadoes.[1]
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  LshapeOne: {
    width: 180,
    height: 90,
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
  image: {
    height: 300,
    width: "100%",
  },
  firstNav: {
    flexDirection: "row",
    alignItems: "center",
  },
  secondNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
  },
  topic: {
    fontSize: 24,
    fontWeight: "bold",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 40,
    marginHorizontal: 8,
  },
  detailsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
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
  titleContainer: {
    marginVertical: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
  },
  postBody: {
    fontSize: 16,
  },
});
