import { StyleSheet, Text, View } from "react-native";

export default function CryptoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Crypto Market</Text>
      <Text style={styles.subtitle}>Track Bitcoin, Ethereum, and more.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  title: { fontSize: 22, fontWeight: "bold", color: "#0ff", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#aaa" },
});
