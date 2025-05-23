// app/(tabs)/_layout.tsx
import { FontAwesome } from "@expo/vector-icons"; // Or any other icon library
import { Tabs } from "expo-router";
import React from "react";

// Helper function for Tab Bar Icons
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="comment" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="order_delivery"
        options={{
          title: "Delivery",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="motorcycle" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
