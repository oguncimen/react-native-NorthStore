import React from "react";
import { View, Text, FlatList } from "react-native";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../../components/ProductCard";
import Config from "react-native-config";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";

export default function Products({ navigation }) {
  console.log(Config.API_URL);
  const { loading, data, error } = useFetch(
    "https://fakestoreapi.com/products"
  );
  function handleProductSelect(id) {
    navigation.navigate("DetailPage", { id });
  }

  const renderProduct = ({ item }) => (
    <ProductCard
      product={item}
      onSelect={() => handleProductSelect(item.id)}
    ></ProductCard>
  );

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    return <Error></Error>;
  }
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={data}
        renderItem={renderProduct}
      ></FlatList>
    </View>
  );
}
