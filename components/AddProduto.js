import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

export default function AddProduto() {
  const [foto, setFoto] = useState(null);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  function escolherFoto() {
    launchImageLibrary({ mediaType: "photo" }, (res) => {
      if (!res.didCancel && !res.errorMessage) {
        setFoto(res.assets[0].uri);
      }
    });
  }

  function salvar() {
    console.log("Produto salvo:");
    console.log("Nome:", nome);
    console.log("Preço:", preco);
    console.log("Foto:", foto);
    alert("Produto salvo!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Produto</Text>

      <TouchableOpacity style={styles.fotoBox} onPress={escolherFoto}>
        {foto ? (
          <Image source={{ uri: foto }} style={styles.foto} />
        ) : (
          <Text>Selecionar Foto</Text>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fafafa" },
  titulo: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  fotoBox: {
    width: 150,
    height: 150,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  foto: { width: "100%", height: "100%" },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  botao: {
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
});
