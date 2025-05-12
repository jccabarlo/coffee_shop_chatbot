import { useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function OnboardingScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("@/assets/images/onboarding-background.png")}
        className="flex-1"
        resizeMode="cover"
      >
        {/* Content Overlay View */}
        <View className="absolute bottom-0 left-0 right-0 bg-black/75 pt-12 pb-10 px-6 items-center">
          {/* Using bg-black/75 as a simplification of the Figma gradient */}
          <Text
            className="text-white text-[32px] font-semibold text-center mb-4 leading-[48px]"
            style={{ fontFamily: "Author-Bold", fontSize: 32 }}
          >
            Fall in Love with Coffee in Blissful Delight!
          </Text>
          <Text
            className="text-[#A2A2A2] text-center mb-10 leading-[21px] text-xl"
            style={{ fontFamily: "Author-Semibold" }}
          >
            Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </Text>
          <Button
            className="bg-[#C67C4E] rounded-2xl w-full py-4 items-center justify-center"
            onPress={() => router.replace("/(tabs)")}
          >
            <Text
              className="text-white text-center"
              style={{ fontFamily: "Author-Semibold", fontSize: 20 }}
            >
              GET STARTED
            </Text>
          </Button>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
