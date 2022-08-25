import {
  Lato_400Regular,
  Lato_700Bold_Italic,
  useFonts as useLato,
} from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestrauntsScreen } from "./src/features/restaurants/screens/restraunts.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold_Italic,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestrauntsScreen />
      </ThemeProvider>

      <ExpoStatusBar style="auto" />
    </>
  );
}
