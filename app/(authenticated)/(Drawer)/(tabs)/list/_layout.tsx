import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";

const Page = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerRight: () => (
          <Link href="/" replace asChild>
            <Ionicons name="log-out-outline" size={24} color="#fff" />
          </Link>
        ),
        // headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
      }}
    >
      <Stack.Screen name="index" options={{ title: "List Items" }} />
      <Stack.Screen name="[id]" options={{ title: "" }} />
    </Stack>
  );
};

export default Page;
