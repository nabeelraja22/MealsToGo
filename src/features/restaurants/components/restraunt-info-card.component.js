import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestrauntInfoCard = ({ restaurant = {} }) => {
  const {
    name = "KALLISTO",
    icon,
    photos = ["https://www.businesslist.pk/img/cats/restaurants.jpg"],
    address = "Bahria Town,Rawalpindi",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={20} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 15, backgroundColor: "white" },
  title: { padding: 15, fontWeight: "bold" },
});
