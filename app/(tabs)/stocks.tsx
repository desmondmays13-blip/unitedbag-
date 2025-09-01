import { StyleSheet, Text, View } from "react-native";

export default function StocksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📈 Stocks</Text>
      <Text style={styles.subtitle}>Market movers coming soon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  title: { fontSize: 22, fontWeight: "bold", color: "#0f0", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#aaa" },
});
