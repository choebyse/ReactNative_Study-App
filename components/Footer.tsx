// components/Footer.tsx
import { View, Text, StyleSheet } from "react-native";

export function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>© 2024 Your App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
  },
});
