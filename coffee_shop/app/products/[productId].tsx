import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

import { Button } from "@/components/ui/button";
import { getProduct } from "@/services/productService";
import { Text } from "~/components/ui/text";

export default function ProductItemScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product_item", params.productId],
    queryFn: ({ queryKey }) => getProduct(+queryKey[1]),
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
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

      <View className="flex-row justify-center items-center gap-4">
        <Button onPress={() => router.back()}>
          <Text>Go Back</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
