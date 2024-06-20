import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const Page = () => {
  const { id, query } = useLocalSearchParams<{ id: string; query?: string }>();
  return (
    <View>
      <Stack.Screen
        options={{
          title: `title #${id} - outside`,
        }}
      />
      <Text>My Id is : {id}</Text>
      <Text>My Query is : {query ?? "unavailable"}</Text>
    </View>
  );
};

export default Page;
