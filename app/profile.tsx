// app/profile.tsx
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is the Profile Screen!</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}