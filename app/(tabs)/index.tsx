import { SafeAreaView, FlatList,Platform  } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { SearchIcon } from '@/components/IconsList';

import { Image } from '@/components/ui/image';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
// import { Icon } from 'react-native-elements';
import Banner from '@/components/ImageBanner';
import { HStack } from '@/components/ui/hstack';
import { Link,LinkText } from '@/components/ui/link';
import ProductListed from '@/components/FeaturedProducts';
import CategoriesList from '@/components/ListCategories'; 
import { Input,InputField,InputSlot,InputIcon } from '@/components/ui/input';

export default function HomeScreen() {
      
  return (
    <SafeAreaView className="bg-white">
        <Box className={`items-center ${Platform.OS === 'android' ? 'mt-10' : ''}`}>
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
                  <SearchIcon size={14} />
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

