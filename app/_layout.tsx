import "@/global.css";
import 'react-native-reanimated';
import { useEffect } from 'react';
import { Tabs } from 'expo-router';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GluestackUIProvider mode="light">
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
