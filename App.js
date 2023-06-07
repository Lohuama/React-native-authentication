import React from "react";
import { View, Text } from "react-native";
import Navigation from "./src/components/Navigation";
import LoginScreen from "./src/screens/LoginScreen";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Navigation  />
    </AuthProvider>
  );
};

export default App;
