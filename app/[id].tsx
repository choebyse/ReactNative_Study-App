// app/[id].tsx
import { View, Text } from "react-native";

interface UserScreenProps {
  params: {
    id: string; // id를 props에서 직접 가져옴
  };
}

export default function UserScreen({ params }: UserScreenProps) {
  const { id } = params; // params에서 id 가져오기

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User ID: {id}</Text>
    </View>
  );
}
