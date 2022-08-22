import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar animated={true} />
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>Search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "#a89f87" }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
