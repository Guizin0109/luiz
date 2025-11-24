import React, { useState } from "react";
import { View, Text, Animated, TouchableOpacity, Dimensions } from "react-native";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const screenWidth = Dimensions.get("window").width;
  const menuX = useState(new Animated.Value(-screenWidth))[0];
  const navigation = useNavigation();


  function toggleMenu() {
    if (menuOpen) {
      Animated.timing(menuX, {
        toValue: -screenWidth,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuOpen(false));
    } else {
      setMenuOpen(true);
      Animated.timing(menuX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER COM O BOTÃO HAMBURGUER */}
      <Header onMenuPress={toggleMenu} />

      {/* MENU LATERAL */}
      {menuOpen && (
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
          activeOpacity={1}
          onPress={toggleMenu}
        />
      )}

      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: screenWidth * 0.7,
          height: "100%",
          backgroundColor: "#fff",
          paddingTop: 50,
          paddingHorizontal: 20,
          transform: [{ translateX: menuX }],
          elevation: 10,
          zIndex: 2,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
          Menu
        </Text>

        <Text style={{ fontSize: 18, marginVertical: 10 }}>Home</Text>
       <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate("AddProduto"); }}>
        <Text style={{ fontSize: 18, marginVertical: 10 }}>Add Produto</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* CONTEÚDO DA HOME */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Bem-vindo à página inicial!
        </Text>
      </View>
    </View>
  );
}
