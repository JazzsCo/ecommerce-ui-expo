import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex items-center justify-center bg-black mt-10'>
      <Text className='text-yellow-800 text-lg font-bold text-right'>Open up App.js to start working on your app! hey my best .</Text>
      <StatusBar style="auto" />
    </View>
  );
}
 
