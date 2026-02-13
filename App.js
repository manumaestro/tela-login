import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

    <View style={styles.header}>
      <View style={styles.boxLogo}>
        <Image
        source={require("./assets/capelo.png")}
        style={styles.logo} />
      </View>

      <Text style={styles.titulo}>Bem-vindo de volta</Text>
      <Text style={styles.subtitulo}>Acesse sua conta do SENAI</Text>
    </View>

    <View style={styles.form}>
      <Text style={styles.label}>E-mail</Text>
      <View style={styles.inputArea}>
        <Ionicons name="mail-outline" size={20} color="#888" />
        <TextInput
        style={styles.input}
        placeholder="seu@email.com"/>
      </View>

      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputArea}>
        <Ionicons name="lock-closed-outline" size={20} color="#888" />
        <TextInput 
        style={styles.input}
        placeholder="********"
        secureTextEntry />
        <Ionicons name="eye-outline" size={20} color="#888" />
      </View>

      <View style={styles.esqueciArea}>
        <Text style={styles.textoRoxo}>Esqueci minha senha</Text>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Entrar →</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.divisor}>
      <View style={styles.linha} />
      <Text style={styles.textoCinza}>Ou entre com</Text>
      <View style={styles.linha} />
    </View>

    <View style={styles.social}>
      <TouchableOpacity style={styles.socialBotao}>
        <FontAwesome name="google" size={20} color="#d43131" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialBotao}>
        <FontAwesome name="github" size={20} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialBotao}>
        <FontAwesome name="linkedin" size={20} color="#373add" />
      </TouchableOpacity>
    </View>

    <View style={styles.footer}>
      <Text style={styles.textoCinza}>Não tem uma conta?</Text>
      <Text style={styles.textoRoxo}>Cadastrar-se</Text>
    </View>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },
  
  boxLogo: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor:"#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#74129b",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 12,
  },

  logo: {
    width: 65,
    height: 65,
    resizeMode: "contain",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 15,
  },

  subtitulo: {
    color: "#777",
    marginTop: 5,
  },

  form: {
    paddingHorizontal: 30,
  },

  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#e5e5e5",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    marginLeft: 8,
  },

  esqueciArea: {
    alignItems: "flex-end",
    marginBottom: 20,
  },

  textoRoxo: {
    color: "#7b2ad8",
    fontWeight: "600",
  },

  botao: {
    backgroundColor: "#7b2ad8",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },

  divisor: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 30,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },

  textoCinza: {
    color: "#777",
    marginHorizontal: 10,
  },

  social: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    gap: 25,
  },

  socialBotao: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },

});
