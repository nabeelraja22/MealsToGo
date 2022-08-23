import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestrauntInfoCard } from "../components/restraunt-info-card.component";

export const RestrauntsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="Search Here" />
    </View>
    <LinearGradient style={styles.list} colors={["#d96404", "black"]}>
      <RestrauntInfoCard />
    </LinearGradient>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
