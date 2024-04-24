import Colors from "@/constants/Colors";
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
const Index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://galaxies.dev/img/logos/logo--blue.png" }}
        style={styles.image}
      />
      <Link href="/(authenticated)/(Drawer)/(tabs)/home" asChild>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>Login</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/register" asChild>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>Register</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/privacy" asChild>
        <TouchableOpacity>
          <Text style={{ color: "#fff" }}>Privacy</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
});

export default Index;
