import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";
const SafeArea = styled(SafeAreaView)`
  margintop: ${StatusBar.currentHeight}px;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 10,
  },
})`
  margin-bottom: ${(props) => props.theme.space[5]};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const Loadingcontainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      {isLoading && (
        <Loadingcontainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </Loadingcontainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtrator={(item) => item.name}
      />
    </SafeArea>
  );
};
