// app/(tabs)/chat.tsx
import { View, Text } from 'react-native';

export default function ChatScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold mb-2">Chat Screen</Text>
      <Text>Chat with our support bot here.</Text>
    </View>
  );
}

