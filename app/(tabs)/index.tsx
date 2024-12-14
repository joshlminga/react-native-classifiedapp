import { StyleSheet, SafeAreaView, View,ScrollView,FlatList  } from 'react-native';

import { Image } from '@/components/ui/image';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Icon } from 'react-native-elements';
import Banner from '@/components/ImageBanner';
import { HStack } from '@/components/ui/hstack';
import { Link,LinkText } from '@/components/ui/link';
import ProductListed from '@/components/FeaturedProducts';
import CategoriesList from '@/components/ListCategories'; 
import { Input,InputField,InputSlot,InputIcon } from '@/components/ui/input';

export default function HomeScreen() {
      
  return (
    <SafeAreaView className="bg-white">
        <Box className="items-center">
          <Image
            source={require('@/assets/images/logo/main-logo-mini.png')}
            alt="Logo"
            size='none'
            className="w-2/4 h-50"
            resizeMode="contain"
            /> 
        </Box>
      <FlatList
      data={[]}
        ListHeaderComponent={() => (
          <>

            {/* Search Area */}
            <Box className="flex px-4 w-full mt-5">
              <Input className="w-full bg-cyan-50 shadow rounded-xl border-gray-300">
                <InputField className="text-dark" placeholder="Search Product" />
                <InputSlot className='p-2'>
                  <Icon
                    name='search'
                    type='font-awesome'
                    color='#000'
                    size='15'
                    onPress={() => console.log('hello')} />
                </InputSlot>
              </Input>
            </Box>

            {/* Banner Image Card */}
            <HStack className="px-0 mt-5">
                <Banner source={require('@/assets/images/cover/home-min-3x.jpg')} />      
            </HStack>

            {/* Categories Section */}
            <Box className="flex px-4 mt-5">
              <HStack space="md" className="justify-between">
                <Box  className="flex-shrink-0">
                  <Text className="text-black font-bold text-3l">Categories</Text>
                </Box>
                <Box className="flex-shrink-0">
                  <Link href={`other/categories`}>
                    <LinkText className="no-underline">all</LinkText>
                  </Link>
                </Box>
              </HStack>
            </Box>

            {/* Categories Button */}
            <Box className="flex px-4 mt-5">
              <HStack space="md" className="">
                <CategoriesList />
              </HStack>
            </Box>
          </>
        )}

        // Render product list
        renderItem={() => null}
        ListFooterComponent={() => (
          <Box className="flex px-4 mt-5 mb-10">
            {/* Render Featured Products */}
            <ProductListed />
          </Box>
        )}
        keyExtractor={(item, index) => index.toString()}
      />        
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
