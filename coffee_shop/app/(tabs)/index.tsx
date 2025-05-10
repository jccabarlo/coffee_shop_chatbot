import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = [
  { id: 1, name: 'All Coffee', isActive: true },
  { id: 2, name: 'Machiato', isActive: false },
  { id: 3, name: 'Latte', isActive: false },
  { id: 4, name: 'Americano', isActive: false },
];

const products = [
  {
    id: 1,
    name: 'Caffe Mocha',
    description: 'Deep Foam',
    price: 4.53,
    rating: 4.8,
    image: require('../../assets/images/coffee-mocha.jpg'),
  },
  {
    id: 2,
    name: 'Flat White',
    description: 'Espresso',
    price: 3.53,
    rating: 4.8,
    image: require('../../assets/images/flat-white.jpg'),
  },
  {
    id: 3,
    name: 'Caffe Panna',
    description: 'Ice/Hot',
    price: 5.53,
    rating: 4.8,
    image: require('../../assets/images/caffe-panna.jpg'),
  },
  {
    id: 4,
    name: 'Mocha Fusi',
    description: 'Ice/Hot',
    price: 7.53,
    rating: 4.8,
    image: require('../../assets/images/mocha-fusi.jpg'),
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#F9F9F9]">
      <StatusBar style="dark" />
      
      {/* Main Content */}
      <ScrollView className="flex-1">
        {/* Location Section */}
        <View className="px-6 pt-4">
          <Text className="text-sm text-[#A2A2A2]">Location</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-base font-semibold text-[#D8D8D8]">
              Bilzen, Tanjungbalai
            </Text>
            <View className="w-4 h-4">
              <Image 
                source={require('../../assets/images/chevron-down.png')} 
                className="w-full h-full" 
              />
            </View>
          </View>
        </View>

        {/* Banner Section */}
        <View className="mx-6 mt-6 rounded-2xl overflow-hidden h-40">
          <Image
            source={require('../../assets/images/banner.jpg')}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="absolute top-6 left-6">
            <View className="bg-[#ED5151] px-2 py-1 rounded-lg w-16">
              <Text className="text-white text-sm font-semibold text-center">
                Promo
              </Text>
            </View>
            <Text className="text-white text-3xl font-semibold mt-4 max-w-[200]">
              Buy one get one FREE
            </Text>
          </View>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center mx-6 mt-6 space-x-4">
          <View className="flex-1 flex-row items-center space-x-2 bg-[#2A2A2A] px-4 py-4 rounded-xl">
            <Image
              source={require('../../assets/images/search.png')}
              className="w-5 h-5"
            />
            <Text className="text-[#A2A2A2] text-base">
              Search coffee
            </Text>
          </View>
          <TouchableOpacity className="bg-[#C67C4E] p-4 rounded-xl">
            <Image
              source={require('../../assets/images/filter.png')}
              className="w-5 h-5"
            />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          className="mt-6 px-6"
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className={`mr-4 px-4 py-2 rounded-lg ${
                category.isActive ? 'bg-[#C67C4E]' : 'bg-[#F1F1F1]'
              }`}
            >
              <Text
                className={`${
                  category.isActive ? 'text-white' : 'text-[#313131]'
                } font-semibold`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Products Grid */}
        <View className="flex-row flex-wrap justify-between px-6 mt-6 pb-24">
          {products.map((product) => (
            <View
              key={product.id}
              className="bg-white w-[155] rounded-2xl mb-6 overflow-hidden"
            >
              <View className="relative">
                <Image
                  source={product.image}
                  className="w-full h-[155]"
                  resizeMode="cover"
                />
                <View className="absolute bottom-0 right-0 bg-black/30 px-2 py-1 rounded-tl-3xl rounded-br-xl flex-row items-center">
                  <Image
                    source={require('../../assets/images/star.png')}
                    className="w-3 h-3 mr-1"
                  />
                  <Text className="text-white text-xs font-semibold">
                    {product.rating}
                  </Text>
                </View>
              </View>
              <View className="p-3">
                <Text className="text-base font-semibold text-[#242424]">
                  {product.name}
                </Text>
                <Text className="text-xs text-[#A2A2A2]">
                  {product.description}
                </Text>
                <View className="flex-row items-center justify-between mt-2">
                  <Text className="text-lg font-semibold text-[#050505]">
                    $ {product.price}
                  </Text>
                  <TouchableOpacity className="bg-[#C67C4E] p-2 rounded-lg">
                    <Image
                      source={require('../../assets/images/plus.png')}
                      className="w-4 h-4"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 left-0 right-0 bg-white px-6 py-6 flex-row justify-between items-center rounded-t-3xl">
        <View className="items-center">
          <Image
            source={require('../../assets/images/home.png')}
            className="w-6 h-6"
            tintColor="#C67C4E"
          />
          <View className="w-1 h-1 rounded-full bg-[#C67C4E] mt-1" />
        </View>
        <Image
          source={require('../../assets/images/heart.png')}
          className="w-6 h-6"
          tintColor="#A2A2A2"
        />
        <Image
          source={require('../../assets/images/bag.png')}
          className="w-6 h-6"
          tintColor="#A2A2A2"
        />
        <Image
          source={require('../../assets/images/notification.png')}
          className="w-6 h-6"
          tintColor="#A2A2A2"
        />
      </View>
    </SafeAreaView>
  );
}
