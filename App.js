import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Login";
import Home from "./components/Home";
import AddProduto from "./components/AddProduto";

const Stack = createNativeStackNavigator();

export default function App() {
  const [logado, setLogado] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!logado ? (
          <Stack.Screen name="Login">
            {(props) => <Login {...props} onLogin={() => setLogado(true)} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddProduto" component={AddProduto} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
