import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { Link } from "expo-router";
const Index = () => {
  return (
    <View style={styles.container}>
      <Link href="/(authenticated)/(Drawer)/(tabs)/(list)/15" asChild>
        <Button title="Go to 15" />
      </Link>

      <Link href="/(authenticated)/(Drawer)/(tabs)/(list)/24?query=foo" asChild>
        <Button title="Go to 24" />
      </Link>

      <Link href="/(authenticated)/(Details)/34?query=Now Outside" asChild>
        <Button title="Go to 34 outside" />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
});

export default Index;
