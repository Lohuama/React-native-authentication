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

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const val = useContext(AuthContext);
  return (
    <View style={style.container}>
      <View>
        <Text>{val}</Text>
        <TextInput 
            style={style.input} 
            value={email}
            placeholder="Enter email"
            onChange={text => setEmail(text)}
        />
        <TextInput
          style={style.input}
          value={password}
          placeholder="Enter password"
          onChange={text => setPassword(text)}
          secureTextEntry
        />
        <Button title="Login"></Button>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={style.link}>Register</Text>
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
