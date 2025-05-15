import { useQuery, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import React from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@/components/ui/button";
import { getProducts } from "@/services/productService";
import { Product } from "@/types/types";
import { Text } from "~/components/ui/text";

export default function ProductsListScreen() {
  // access the client
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const renderItem = ({ item }: ListRenderItemInfo<Product>) => {
    return (
      <View className="justify-between items-center">
        <Text className="font-[Author-Semibold] text-xl">
          {item.name} {" - "}
          <Text className="font-[Author-Regular] text-sm">
            {item.description}
          </Text>
        </Text>
      </View>
    );
  };

  const itemSeparator = () => <View className="h-6" />;

  return (
    <SafeAreaView className="flex-1">
      <FlatList
        className="p-8"
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
      />
      <View className="flex-row justify-center items-center gap-4">
        <Button onPress={() => router.back()}>
          <Text>Go Back</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
