import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";
const Page = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="(Drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="(Details)/[id]" />
    </Stack>
  );
};

export default Page;
