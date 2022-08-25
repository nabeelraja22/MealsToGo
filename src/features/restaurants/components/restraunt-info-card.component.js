import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
`;

const Title = styled.Text`
  /* padding: ${(props) => props.theme.space[3]}; */
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
  /* padding: ${(props) => props.theme.space[3]}; */
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
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
    <RestaurantCard elevation={20}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <SvgXml xml={star} />
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
