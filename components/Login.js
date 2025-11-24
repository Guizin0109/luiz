import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Login({ onLogin }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin() {
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
      setErro("");
      onLogin(); 
    } else {
      setErro("Usuário ou senha incorretos.");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login com CNPJ</Text>

      <TextInput
        style={styles.input}
        placeholder="Faça Login com CNPJ"
        onChangeText={setUsuario}
        value={usuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />

      {erro ? <Text style={styles.erro}>{erro}</Text> : null}

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  botao: {
    width: "100%",
    padding: 14,
    backgroundColor: "#007bff",
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  erro: {
    color: "red",
    marginTop: 5,
  },
});
