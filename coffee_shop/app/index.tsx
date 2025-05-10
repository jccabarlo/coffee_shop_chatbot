import { useRouter } from "expo-router";
import { ImageBackground, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <ImageBackground
        source={require("../assets/images/onboarding_image.png")}
        className="flex-1"
        imageStyle={{
          transform: [{ scale: 1.2 }],
        }}
      >
        {/* Dark Gradient Overlay */}
        <View className="flex-1 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          {/* Content Container */}
          <View className="flex-1 justify-end">
            <View className="px-8 pb-12 space-y-6">
              {/* Text Section */}
              <View className="space-y-4">
                <Text
                  className="text-[32px] leading-[38px] font-bold text-center text-white"
                  style={{ fontFamily: "Sora" }}
                >
                  Fall in Love with Coffee in{"\n"}Blissful Delight!
                </Text>
                <Text
                  className="text-[14px] leading-[21px] text-center text-white/90 mt-4"
                  style={{ fontFamily: "Sora" }}
                >
                  Welcome to our cozy coffee corner, where{"\n"}every cup is a
                  delightful for you.
                </Text>
              </View>

              {/* Button */}
              <Button
                className="w-full h-[62px] bg-[#C67C4E] rounded-[16px] mt-4"
                onPress={() => router.replace("/(tabs)")}
              >
                <Text
                  className="text-white text-base font-semibold"
                  style={{ fontFamily: "Sora" }}
                >
                  Get Started
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
