import React from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from '~/components/ui/text'; // Assuming Text component from react-native-reusables
import { Button } from '~/components/ui/button'; // Assuming Button component from react-native-reusables
// We'll need to import actual icons later or use a library
// For now, using text placeholders for icons

// Placeholder for icons - replace with actual icon components
const Icon = ({ name, className }: { name: string; className?: string }) => (
  <Text className={`text-2xl ${className}`}>{name === 'heart' ? '❤️' : name === 'star' ? '⭐' : '<'}</Text>
);

const ProductDetailsScreen = () => {
  const [selectedSize, setSelectedSize] = React.useState('M');
  const product = {
    name: 'Cappuccino',
    subtitle: 'with Chocolate',
    rating: '4.8',
    reviews: '(230)',
    description:
      'A cappuccino is an espresso-based coffee drink that originated in Italy and is traditionally prepared with steamed milk foam. Variations of the drink involve the use of cream instead of milk, using non-dairy milk substitutes and flavoring with cinnamon or chocolate powder.',
    price: '$ 4.53',
    imageUri: 'https://via.placeholder.com/400x300.png?text=Product+Image', // Placeholder image
  };

  return (
    <View className="flex-1 bg-gray-100">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between p-4 absolute top-0 left-0 right-0 z-10 bg-transparent">
          <TouchableOpacity onPress={() => console.log('Back pressed')}>
            <Icon name="arrow-back" className="text-black" />
          </TouchableOpacity>
          <Text className="text-xl font-bold text-black">Detail</Text>
          <TouchableOpacity onPress={() => console.log('Favorite pressed')}>
            <Icon name="heart" className="text-red-500" />
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <Image
          source={{ uri: product.imageUri }}
          className="w-full h-80"
          resizeMode="cover"
        />

        <View className="p-5 bg-white rounded-t-3xl -mt-8">
          {/* Product Name and Subtitle */}
          <Text className="text-3xl font-bold text-gray-800">{product.name}</Text>
          <Text className="text-base text-gray-500 mb-3">{product.subtitle}</Text>

          {/* Rating */}
          <View className="flex-row items-center mb-4">
            <Icon name="star" className="text-yellow-500 mr-1" />
            <Text className="text-lg font-semibold text-gray-800">{product.rating}</Text>
            <Text className="text-sm text-gray-500 ml-1">{product.reviews}</Text>
          </View>

          {/* Divider */}
          <View className="h-px bg-gray-200 my-4" />

          {/* Description */}
          <Text className="text-xl font-bold text-gray-800 mb-2">Description</Text>
          <Text className="text-base text-gray-600 leading-relaxed mb-2" numberOfLines={3}>
            {product.description}
          </Text>
          <TouchableOpacity onPress={() => console.log('Read more pressed')}>
            <Text className="text-base text-orange-500 font-semibold">Read More</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="h-px bg-gray-200 my-4" />

          {/* Size Selection */}
          <Text className="text-xl font-bold text-gray-800 mb-3">Size</Text>
          <View className="flex-row justify-around mb-6">
            {['S', 'M', 'L'].map((size) => (
              <TouchableOpacity
                key={size}
                onPress={() => setSelectedSize(size)}
                className={`py-3 px-8 rounded-xl border-2 ${
                  selectedSize === size ? 'bg-orange-100 border-orange-500' : 'bg-gray-50 border-gray-200'
                }`}
              >
                <Text
                  className={`text-lg font-semibold ${
                    selectedSize === size ? 'text-orange-600' : 'text-gray-700'
                  }`}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Footer - Price and Buy Now Button */}
      <View className="bg-white p-5 border-t border-gray-200 flex-row items-center justify-between">
        <View>
          <Text className="text-sm text-gray-500">Price</Text>
          <Text className="text-2xl font-bold text-orange-600">{product.price}</Text>
        </View>
        <Button className="bg-orange-500 rounded-2xl py-4 px-10" onPress={() => console.log('Buy Now pressed')}>
          <Text className="text-white text-lg font-bold">Buy Now</Text>
        </Button>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;