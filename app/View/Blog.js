import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  useWindowDimensions,
  Image,
} from "react-native";

import RenderHTML from "react-native-render-html";

const BlogItem = (props) => {
  console.log("props", props);
  const { width } = useWindowDimensions();
  const renderersProps = {
    a: {
      onPress(event, url, htmlAttribs, target) {
        props.choosePost(props.id);
      },
    },
  };

  const blogItem = {
    html: `<a href =${props.id} id
    style ="text-decoration-line :none ; 
    color :'#000000' ;
    TextAlign :'center'"    
    <h1> ${props.title} </h1>
    ${props.excerpt}
    <img src="${props.imageSrc}" alt="Girl in a jacket" width="300" height="300">
    </a>
    
  `,
  };
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderBottomColor: "#000000",
        borderStyle: "solid",
      }}
    >
      <RenderHTML
        source={blogItem}
        renderersProps={renderersProps}
        contentWidth={width}
      ></RenderHTML>
    </View>
  );
};

const Blog = ({ navigation }) => {
  const [blogLoaded, setBlogLoaded] = useState(false);
  const [blogList, setBlogList] = useState([]);

  const getPostes = async () => {
    try {
      const response = await fetch(
        "https://public-api.wordpress.com/rest/v1.1/sites/myglobomantics.wordpress.com/posts"
      );
      const globo = await response.json();
      setBlogList(Array.from(globo.posts));
    } catch (err) {
      console.log(err);
    } finally {
      setBlogLoaded(true);
    }
  };

  useEffect(() => {
    getPostes();
  }, []);

  const chooseBlog = (blogID) => {
    blogID = 12;
    console.log("blogId", blogID);
    navigation.navigate("BlogDetail", { blogId: blogID });
  };
  return (
    <View>
      {blogLoaded && (
        <FlatList
          data={blogList}
          keyExtractor={(item) => item.ID.toString()}
          renderItem={({ item }) => (
            <BlogItem
              id={item.ID}
              title={item.title}
              imageSrc={item.featured_image}
              excerpt={item.excerpt}
              choosePost={chooseBlog}
            />
          )}
        />
      )}
      {!blogLoaded && (
        <View style={{ paddingTop: 30 }}>
          <Text>LOADING</Text>
        </View>
      )}
    </View>
  );
};

export default Blog;
