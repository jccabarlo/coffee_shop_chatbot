// app/(tabs)/home.tsx
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold mb-2">Home Screen</Text>
      <Text>Welcome to the Coffee Shop!</Text>
    </View>
  );
}

