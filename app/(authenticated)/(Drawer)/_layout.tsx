import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import Colors from "@/constants/Colors";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          drawerActiveBackgroundColor: Colors.primary,
          drawerActiveTintColor: "#fff",
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{ title: "Home", headerShown: false }}
        />
        <Drawer.Screen name="settings" options={{ title: "Settings" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
