import Colors from "@/constants/Colors";
import AuthProvider, { useAuth } from "@/context/AuthContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function InitialLayOut() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const { token, initialized } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!initialized) return;

    const insideAuthGroup = segments[0] === "(authenticated)";

    if (token && !insideAuthGroup) {
      router.replace("/(authenticated)/(Drawer)/(tabs)/home");
    } else if (!token && insideAuthGroup) {
      router.replace("/");
    }
  }, [token, initialized]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded || !initialized) {
    return <Slot />;
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="register"
          options={{
            title: "Create Account",
            headerBackTitle: "Login",
          }}
        />

        <Stack.Screen
          name="privacy"
          options={{
            title: "Privacy Policy",
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="(authenticated)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}

export default function RootLayoutNav() {
  return (
    <AuthProvider>
      <InitialLayOut />
    </AuthProvider>
  );
}
