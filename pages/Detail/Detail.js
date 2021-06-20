import React from "react";
import { View, Text, Image } from "react-native";
import useFetch from "../../hooks/useFetch";
import styles from "./Detail.style";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
export default function Detail({ route }) {
  const { id } = route.params;
  const { loading, error, data } = useFetch(
    "https://fakestoreapi.com/products" + "/" + id
  );

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image}></Image>
      <View tyle={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price}</Text>
      </View>
    </View>
  );
}
