import { StyleSheet, Text, View } from "react-native";

export default function TipsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💡 Tips</Text>
      <Text style={styles.subtitle}>Investor tips & education coming soon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#000" },
  title: { fontSize: 22, fontWeight: "bold", color: "#fff", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#aaa" },
});
