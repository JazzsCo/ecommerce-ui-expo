import React from 'react' 
import { View, Text, Image, Button } from 'react-native'

const ProductItem = ({
    title,
    price,
    description,
    category,
    image,
    rating,
}) => {
  return (
    <View className='flex-1 items-center mt-5'>
      <View className='w-10/12 p-5 bg-white cursor-pointer rounded-xl shadow-lg'>
        <Image source={{uri:image}} className='w-full h-72' style={{resizeMode:'contain'}}/>
        <View className='space-y-1'>
            <Text className="text-xs opacity-60">{category}</Text>
            <Text className='text-sm opacity-80 font-semibold'>{title}</Text>
            <Text>{description}</Text>
        </View>
        <View>
            <Text className='mt-2 text-lg mb-1'>$ {price}</Text>
            <Button title='Buy'/>
        </View>
      </View>
    </View>
  )
}

export default ProductItem