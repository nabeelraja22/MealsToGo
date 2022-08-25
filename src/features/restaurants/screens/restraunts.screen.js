import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestrauntInfoCard } from "../components/restraunt-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margintop: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
  );
`;

export const RestrauntsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search Here" />
    </SearchContainer>

    <RestaurantListContainer>
      <RestrauntInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
