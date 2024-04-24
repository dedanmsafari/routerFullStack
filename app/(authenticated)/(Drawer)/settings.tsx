import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const Page = () => {
  const navigation = useNavigation();

  const toggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View>
      <Text>Page</Text>
      <Button title="toggle" onPress={toggle} />
    </View>
  );
};

export default Page;
