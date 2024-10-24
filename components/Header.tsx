// components/Header.tsx
import { View, Text, StyleSheet } from "react-native";

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
