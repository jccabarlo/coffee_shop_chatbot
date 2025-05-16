import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Products" }} />
      <Stack.Screen name="[productId]" options={{ title: "Product Details" }} />
    </Stack>
  );
}
