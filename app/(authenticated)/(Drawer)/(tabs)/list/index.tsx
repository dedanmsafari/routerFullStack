import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";
import { Link } from "expo-router";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const { token } = useAuth();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const response = await fetch("/api/todos", {
        headers: {
          Authorization: `${token}`,
        },
      });

      const todos = await response.json();

      setTodos(todos);
    };

    loadTodos();
  }, []);

  return (
    <View style={styles.container}>
      <Link href="/(authenticated)/(Drawer)/(tabs)/list/15" asChild>
        <Button title="Go to 15" />
      </Link>

      <Link href="/(authenticated)/(Drawer)/(tabs)/list/24?query=foo" asChild>
        <Button title="Go to 24" />
      </Link>

      <Link href="/(authenticated)/Details/34?query=Now Outside" asChild>
        <Button title="Go to 34 outside" />
      </Link>

      <FlatList
        data={todos}
        keyExtractor={(item: any) => item._id}
        renderItem={({ item }) => (
          <Link
            href={`/(authenticated)/(Drawer)/(tabs)/list/${item._id}`}
            asChild
          >
            <TouchableOpacity style={{ padding: 10, height: 44 }}>
              <Text>{item.task}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
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
