import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, SafeAreaView, View } from "react-native";

import { Button } from "@/components/ui/button";
import { getProducts } from "@/services/productService";
import { Text } from "~/components/ui/text";

export default function ProductsListScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
     return <Text className="text-center mt-[20%]">Loading...</Text>;
   }
 
   if (error) {
     return <Text className="text-center mt-[20%]">Error: {error.message}</Text>;
   }

  return (
    <SafeAreaView className="flex-1 bg-slate-100">
      <FlatList
        className="p-8"
        data={data}
        renderItem={({ item }) => {
          return (
            <Pressable
              className="justify-between items-center"
              onPress={() => {
                router.push(`/products/${item.id}`);
              }}
            >
              <Text className="font-[Author-Semibold] text-xl">
                {item.name} {" - "}
                <Text className="font-[Author-Regular] text-sm">
                  {item.description}
                </Text>
              </Text>
            </Pressable>
          );
        }}
        ItemSeparatorComponent={() => <View className="h-6" />}
      />
      <View className="flex-row justify-center items-center gap-4">
        <Button onPress={() => router.back()}>
          <Text>Go Back</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
