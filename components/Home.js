import React from "react";
import { View, Text } from "react-native";
import Header from "./Header";

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Header />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Bem-vindo à página inicial!
        </Text>
      </View>
    </View>
  );
}
