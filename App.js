//Imports das ferramentas usadas
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

//Interface do APP
export default function App() {
  //criação das variáveis com o uso do useState
  const [nome, setNome] = useState(""); //('')por padrão vazio
  const [email, setEmail] = useState(""); //('')por padrão vazio
  const [fone, setFone] = useState(""); //('')por padrão vazio
  const [end, setEnd] = useState(""); //('')por padrão vazio

  //A const enviar precisa ser delcara antes, para ser usada no onpress
  const enviar = () => {
    alert(
      "Salvo com sucesso!" +
        "\n" +
        nome +
        "\n" +
        end +
        "\n" +
        fone +
        "\n" +
        email
    );
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={estilo.container}>
      <Image
        source={require("./assets/logo.png")}
        style={{ width: 400, height: 120 }} //Aplica estilo diretamento no JSX para definir o tamanho do logo
      />
      <Text style={estilo.titulo}>TADS - 5° Semestre</Text>
      <Text style={estilo.subTitulo}>Programação para Dispositivos Móveis</Text>
      <TextInput
        style={estilo.input}
        placeholder="Digite seu nome..."
        autoCapitalize="words" //A primeira letra de cada palavra será maíúscula
        onChangeText={(texto) => setNome(texto)}
        //no parametro (texto) que poderia ter qualquer outro nome e mandando para o set nome
        //para enfim ser colocado como variavel nome
      />
      <TextInput
        style={estilo.input}
        placeholder="Telefone"
        inputMode="tel" //define o tipo de teclado como telefone
        onChangeText={(texto) => setFone(texto)}
      />
      <TextInput
        style={estilo.input}
        placeholder="Endereço"
        onChangeText={(texto) => setEnd(texto)}
      />
      <Button title="Enviar" onPress={enviar} />
      {/* O onPress precisa receber uma função já declarada.
      Se a função não existir, o botão não funcionará corretamente. */}
    </KeyboardAvoidingView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1ffd1ff",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 25,
    color: "#2e5e83ff",
    fontWeight: 800,
    marginTop: 40,
  },

  subTitulo: {
    fontSize: 20,
    color: "#2e5e83ff",
    fontWeight: 300,
  },

  input: {
    backgroundColor: "#fff",
    width: "70%", // da 70% de larura da tela para o quadrado do input
    marginTop: 15, //separa os qudrados dos inputs
    borderColor: "#000", //adiciona cor a borda
    borderWidth: 1, // adiciona espessura a borade
    borderRadius: 10, // arredonda a borda
  },
});
