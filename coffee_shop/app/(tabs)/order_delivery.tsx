import React from 'react';
import { View, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/components/ui/text'; // Import custom Text component
import BackIcon from '@/assets/images/arrow_left_icon.svg';
import GpsIcon from '@/assets/images/gps_icon.svg';
import CallIcon from '@/assets/images/call_icon.svg';
import RouteLineImage from '@/assets/images/route_line.svg';
// PNGs are used with Image component
// const DriverProfileImage = require('../assets/images/driver_profile.png');
// const MotorbikeIconImage = require('../assets/images/motorbike_icon.png');
// const MapBackgroundImage = require('../assets/images/map_background.png');


export default function OrderDeliveryScreen() {
  return (
    <View className="flex-1 bg-[#F9F9F9]">
      <StatusBar barStyle="dark-content" backgroundColor="#F9F9F9" />
      <ImageBackground
        source={require('@/assets/images/map_background.png')}
        className="flex-1"
        resizeMode="cover"
      >
        <SafeAreaView className="flex-1">
          {/* Top Navigation */}
          <View className="flex-row justify-between items-center px-6 pt-4">
            <TouchableOpacity className="bg-[#EDEDED] p-2.5 rounded-xl">
              {/* <BackIcon width={20} height={20} /> */}
            </TouchableOpacity>
            <Text className="text-lg font-semibold text-[#242424]">Track Order</Text>
            <TouchableOpacity className="bg-[#EDEDED] p-2.5 rounded-xl">
              {/* <GpsIcon width={20} height={20} /> */}
            </TouchableOpacity>
          </View>

          {/* Driver Icon on Map - Positioned absolutely */}
          <View className="absolute top-[40%] left-[45%] bg-white p-2 rounded-full shadow-lg">
            <Image source={require('@/assets/images/motorbike_icon.png')} className="w-8 h-8" />
          </View>

          {/* Route Line */}
          <View className="absolute top-[20%] left-0 right-0 items-center justify-center w-full h-[30%]">
            {/* <RouteLineImage width="80%" height="100%" preserveAspectRatio="xMidYMid meet" /> */}
          </View>


          {/* Bottom Sheet Area */}
          <View className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[24px] p-6 pb-8 shadow-2xl">
            {/* Delivery Time & Address */}
            <View className="items-center mb-4">
              <Text className="text-lg font-semibold text-[#242424]">10 minutes left</Text>
              <Text className="text-sm text-[#808080]">Delivery to Jl. Kpg Sutoyo</Text>
            </View>

            {/* Progress Bar */}
            <View className="flex-row justify-between items-center mb-6">
              <View className="h-1 bg-[#36C07E] flex-1 rounded-full" />
              <View className="h-1 bg-[#36C07E] flex-1 rounded-full mx-2" />
              <View className="h-1 bg-[#36C07E] flex-1 rounded-full mr-2" />
              <View className="h-1 bg-[#E3E3E3] flex-1 rounded-full" />
            </View>

            {/* Delivered Order Info */}
            <View className="flex-row items-center bg-white p-3 rounded-xl border border-[#E3E3E3] mb-6">
              <View className="bg-[#C67C4E] p-2 rounded-lg mr-4">
                <Image source={require('@/assets/images/motorbike_icon.png')} className="w-6 h-6" />
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-[#242424]">Delivered your order</Text>
                <Text className="text-xs text-[#A2A2A2] leading-tight">
                  We will deliver your goods to you in the shortest possible time.
                </Text>
              </View>
            </View>

            {/* Driver Info */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <Image
                  source={require('@/assets/images/driver_profile.png')} // Using downloaded PNG
                  className="w-14 h-14 rounded-xl mr-4"
                />
                <View>
                  <Text className="text-sm font-semibold text-[#242424]">Brooklyn Simmons</Text>
                  <Text className="text-xs text-[#A2A2A2]">Personal Courier</Text>
                </View>
              </View>
              <TouchableOpacity className="p-3 border border-[#E3E3E3] rounded-xl">
                {/* <CallIcon width={20} height={20} /> */}
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
      {/* Home Indicator Placeholder */}
      <View className="h-8 bg-white items-center justify-center">
        <View className="w-32 h-1.5 bg-black rounded-full"/>
      </View>
    </View>
  );
};
