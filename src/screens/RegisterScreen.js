import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AuthContext } from "../context/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading,  register } = useContext(AuthContext);
  return (
    <View style={style.container}>
      <Spinner visible={isLoading} />
      <View>
        <TextInput
          style={style.input}
          value={name}
          placeholder="Enter name"
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={style.input}
          value={email}
          placeholder="Enter email"
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={style.input}
          value={password}
          placeholder="Enter password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
        <Button
          title="Register"
          onPress={() => {
            register(name, email, password);
          }}
        ></Button>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={style.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: "blue",
  },
});

export default LoginScreen;
