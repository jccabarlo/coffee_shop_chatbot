// app/(tabs)/cart.tsx
import { Text, View } from "react-native";

export default function CartScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-2xl font-bold mb-2">Cart</Text>
      <Text>Order here...</Text>
    </View>
  );
}
