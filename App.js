import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView,View, Switch} from 'react-native';
import {useColorScheme} from 'nativewind'
import Products from './components/Products';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme()

  return (
    <SafeAreaView className='flex-1 bg-gray-200 dark:bg-neutral-900'>
        <View className='flex mx-4 mt-7'>
          <View className='flex flex-row justify-between'>
            <Text className='dark:text-white text-lg'>
              Icon
            </Text>
            <View className='flex-row space-x-2 justify-center items-center'>
              <Text className='dark:text-white text-lg'>{colorScheme === 'dark' ? 'Night' : 'Day'}</Text>
              <Switch value={colorScheme === 'dark'} onChange={() => toggleColorScheme()} />
            </View>
          </View>
          <Products/>
        </View>
      <StatusBar style={colorScheme === 'dark' ? 'light': 'dark'} />
    </SafeAreaView>
  );
}
 
