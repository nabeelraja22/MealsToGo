import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";

import { RestrauntsScreen } from "./src/features/restaurants/screens/restraunts.screen";

export default function App() {
  return (
    <>
      <RestrauntsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
