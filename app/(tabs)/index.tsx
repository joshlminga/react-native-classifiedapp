import { StyleSheet, SafeAreaView, View  } from 'react-native';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Input,InputField,InputSlot,InputIcon } from '@/components/ui/input';
import { Icon } from 'react-native-elements';
import ImageCarousel from "../../components/ImageSlider";

export default function HomeScreen() {
  return (
        <SafeAreaView>
        <Box className="flex w-full max-w-4xl rounded-lg px-4">
        <HStack space="md" className="flex w-full" reversed={false} >
          <Box  className="flex-1">
            <Text className="text-black font-bold text-2l">Welcome to Azima</Text>
          </Box>
          <Box className="flex-1 bg-green-500 text-white">
              <Text>Welcome</Text>
          </Box>
        </HStack>

        {/* Search Area */}
        <HStack className="flex w-full mt-5">
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
        </HStack>

        {/* Banner Image Card */}

        <HStack space="md" reversed={false} >
          <Box  className="flex w-full ">
            <ImageCarousel />
          </Box>
        </HStack>
  
      </Box>
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
