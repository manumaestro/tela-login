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
        source={require("./assets/capela.png")}
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
        styles={styles.input}
        placeholder="seu@email.com"/>
      </View>

      <Text style={styles.label}>Senha</Text>
      <View style={styles.inputArea}>
        <Ionicons name="cadeado-outline" size={20} color="#888" />
        <TextInput 
        style={styles.input}
        placeholder="********"
        secureTextEntry />
        <Ionicons name="olho-outline" size={20} coor="#888" />
      </View>

      <View style={styles.esqueciArea}>
        <Text style={styles.textoRoxo}>Esqueci minha senha</Text>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Entrar →</Text>
      </TouchableOpacity>
    </View>

    
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
