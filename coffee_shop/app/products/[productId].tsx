import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

import { Button } from "@/components/ui/button";
import { getProduct } from "@/services/productService";
import { Text } from "~/components/ui/text";
import { useCartStore } from "@/store/cart";

export default function ProductItemScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { addItemToCart, cart_items, orders_count, increase } = useCartStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product_item", params.productId],
    queryFn: ({ queryKey }) => getProduct(+queryKey[1]),
  });

  if (isLoading) {
    return <Text className="text-center mt-[20%]">Loading...</Text>;
  }

  if (error) {
    return <Text className="text-center mt-[20%]">Error: {error.message}</Text>;
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center gap-4 p-8">
        <Text className="text-center font-[Author-Semibold] text-2xl">
          {data?.name}
        </Text>
        <Text className="text-center font-[Author-Regular] text-xl">
          {data?.description}
        </Text>
      </View>

      {Object.values(cart_items).map((item, index) => (
        <View
          key={index}
          className="flex-row justify-between items-center p-4 bg-slate-100"
        >
          <Text className="font-[Author-Semibold] text-xl">{item.name}</Text>
          <Text className="font-[Author-Regular] text-xl">{item.quantity}</Text>
        </View>
      ))}

      <View className="flex-row justify-between items-center p-4 bg-slate-200">
        <Text className="font-[Author-Semibold] text-xl">
          Total Price: {data?.price}
        </Text>
        <Text className="font-[Author-Regular] text-xl">
          {orders_count} orders
        </Text>
      </View>

      <View className="flex-row justify-center items-center gap-4">
        <Button
          onPress={() => {
            increase(1);
            router.back();
          }}
        >
          <Text>Go Back</Text>
        </Button>
        <Button
          className="bg-blue-500 text-white"
          onPress={() => {
            if (!data) {
              return;
            }
            addItemToCart(data);
          }}
        >
          <Text>Add to Cart</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
