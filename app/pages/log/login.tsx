import { Input,InputField,InputSlot } from '@/components/ui/input';
import { SafeAreaView, ScrollView, ImageBackground  } from 'react-native';
import { Button, ButtonText} from '@/components/ui/button';
import { AsteriskIcon } from '@/components/IconsList';
import { Link as CustomLink,LinkText } from '@/components/ui/link';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Stack,Link } from 'expo-router';

export default function Login() {
  return (
    <ImageBackground 
      source={require('@/assets/images/cover/login-bg.png')} // Replace with your image path
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Screen options={{ title: '', headerBackTitle: 'Sell' }} />

        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 5 }}>
          <Box className="my-10 mb-5 px-4">
            <Heading bold={true} size="5xl" className="pt-5 font-mono antialiased text-green-700">Azima</Heading>
            <Heading bold={true} size="4xl" className="pt-5 font-serif text-blue-800">Lease & Sell</Heading>
            <Text className="text-gray-800 text-xl mt-5 font-bold">Sell your products and services on Azima</Text>
          </Box>
          <Box className="mb-5">
            <Card size="md" variant="elevated"  className="mt-10 shadow-xl">
              <Heading bold={true} size="xl" className="pb-7">Login</Heading>

              {/* Email */}
              <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                <InputField className=""
                  placeholder='Enter Email'
                />
                <InputSlot className='p-2'>
                    <AsteriskIcon size={10} />
                </InputSlot>
              </Input>

              {/* Confirm Password */}
              <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                <InputField className="" type={"password"}
                  placeholder='Enter Password'
                />
                <InputSlot className='p-2'>
                    <AsteriskIcon size={10} />
                </InputSlot>
              </Input>

              <Box className="mt-5">
                <Button size="md" variant="solid" action="positive" className="bg-blue-600 hadow-lg">
                  <ButtonText className="text-white">Sign In</ButtonText>
                </Button>
              </Box>

              <HStack className="mt-5 ">
                <Link href={`/pages/log/reset_password`}>
                  <HStack className="mt-2 py-2">
                    <LinkText className="text-gray-600 no-underline" size="lg">Forgot password?</LinkText>
                  </HStack>
                </Link>
              </HStack>

              <Divider className="my-10 mb-5" />

              <Box className="mt-5 items-center">
                <HStack className="mt-5">
                  <Text size="lg">Don't have an account? </Text>
                  <Link href={`pages/log/register`}>
                    <HStack>
                      <LinkText className="text-red-800 no-underline" size="lg">Sign up</LinkText>
                    </HStack>
                  </Link>
                </HStack>
              </Box>
            </Card>

          </Box>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}