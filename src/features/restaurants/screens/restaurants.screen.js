import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, SafeAreaView, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantCard } from "../components/restaurant-info-card-styles";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  margintop: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 20,
  },
})`
  margin-bottom: ${(props) => props.theme.space[4]};
`;
export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search Here" />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
      ]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtrator={(item) => item.name}
    />
  </SafeArea>
);
