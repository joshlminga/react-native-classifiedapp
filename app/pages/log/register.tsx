import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { AsteriskIcon, ChevronDownIcon } from '@/components/IconsList';
import { Input,InputField,InputSlot } from '@/components/ui/input';
import { SafeAreaView, ScrollView, ImageBackground  } from 'react-native';
import { Button, ButtonText} from '@/components/ui/button';

import { Link as CustomLink, LinkText } from '@/components/ui/link';
import { Link,Stack } from 'expo-router';

import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';


export default function Register() {
  return (
    <ImageBackground 
      source={require('@/assets/images/cover/login-bg.png')} // Replace with your image path
      resizeMode="cover"
      style={{ flex: 1 }}
    >
        <SafeAreaView className="flex-1">
            <Stack.Screen options={{ title: '', headerBackTitle: 'Sign in' }} />

            <ScrollView>
                <Box className="mt-20 mb-5 px-4">
                <Heading bold={true} size="3xl" className="font-mono antialiased text-green-700">Create an account</Heading>

                <HStack className="mt-2">
                    <Text size="lg" className="font-bold text-gray-900">Already have an account? </Text>
                    <Link href={`pages/log/login`}>
                    <HStack>
                        <LinkText className="text-blue-700 font-bold" size="lg">Sign in</LinkText>
                    </HStack>
                    </Link>
                </HStack>
                </Box>

                {/* Input Area */}
                <Card size="md" variant="filled" className="m-3 px-4 py-10 bg-white shadow">
                <Box className="mt-1">

                    <Heading size="md" className=""> Enter Personal Info </Heading>
                    <Divider className="my-0.5 mb-5" />

                    {/* Full Name */}
                    <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                    <InputField className=""
                        placeholder='Full name..'
                    />
                    <InputSlot className='p-2'>
                        <AsteriskIcon size={10} />
                    </InputSlot>
                    </Input>

                    {/* Phone Number */}
                    <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                    <InputField className=""
                        placeholder='Phone number (start with +254)'
                    />
                    <InputSlot className='p-2'>
                        <AsteriskIcon size={10} />
                    </InputSlot>
                    </Input>

                    {/* Email */}
                    <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                    <InputField className=""
                        placeholder='Email address'
                    />
                    <InputSlot className='p-2'>
                        <AsteriskIcon size={10} />
                    </InputSlot>
                    </Input>
                    </Box>
                </Card>

                <Card size="md" variant="filled" className="m-3 px-4 py-10 bg-white shadow">
                <Box className="mt-1">
                    <Heading size="md" className="mt-1"> Enter Business Info </Heading>
                    <Divider className="my-0.5 mb-5" />

                    {/* Email */}
                    <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                    <InputField className=""
                        placeholder='Enter Business Name'
                    />
                    <InputSlot className='p-2'>
                        <AsteriskIcon size={10} />
                    </InputSlot>
                    </Input>

                    {/* Country */}
                    <Select className="bg-white mb-4">
                    <SelectTrigger variant="outline" size="lg" className="w-full flex items-center justify-between px-2 rounded-md border-red-500" >
                        <SelectInput placeholder="Select country" className="flex-1"  />
                        <SelectIcon className="ml-2 pl-2 "  as={ChevronDownIcon} />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop/>
                        <SelectContent>
                        <SelectDragIndicatorWrapper>
                            <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        <SelectItem label="" value="" />
                        <SelectItem label="Afghanistan" value="web" />
                        <SelectItem label="Aland Islands" value="backend"/>
                        <SelectItem label="Albania" value="backend"/>
                        <SelectItem label="Kenya" value="backend"/>
                        <SelectItem label="Tanzania" value="backend"/>
                        </SelectContent>
                    </SelectPortal>
                    </Select>      

                    {/* City */}
                    <Select className="bg-white mb-4">
                    <SelectTrigger variant="outline" size="lg" className="w-full flex items-center justify-between px-2 rounded-md border-red-500" >
                        <SelectInput placeholder="Select city" className="flex-1"  />
                        <SelectIcon className="ml-2 pl-2 "  as={ChevronDownIcon} />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop/>
                        <SelectContent>
                        <SelectDragIndicatorWrapper>
                            <SelectDragIndicator />
                        </SelectDragIndicatorWrapper>
                        <SelectItem label="" value="" />
                        <SelectItem label="Nairobi" value="web" />
                        <SelectItem label="Mombasa" value="backend"/>
                        <SelectItem label="Dar-es-salaam" value="backend"/>
                        <SelectItem label="Arusha" value="backend"/>
                        </SelectContent>
                    </SelectPortal>
                    </Select>      

                    <Heading size="md" className="mt-1"> Create Password </Heading>
                    <Divider className="my-0.5 mb-5" />

                    {/* Password */}
                    <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                    <InputField className="" type={"password"}
                        placeholder='Enter Password'
                    />
                    <InputSlot className='p-2'>
                        <AsteriskIcon size={10} />
                    </InputSlot>
                    </Input>

                    {/* Confirm Password */}
                    <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                    <InputField className="" type={"password"}
                        placeholder='Confirm Password'
                    />
                    <InputSlot className='p-2'>
                        <AsteriskIcon size={10} />
                    </InputSlot>
                    </Input>

                    <Box className="mt-8">
                    <Button size="md" variant="solid" action="positive" >
                        <ButtonText>Create an account</ButtonText>
                    </Button>
                    </Box>
                </Box>
                </Card>

                <Box className="mt-10 mb-20 flex items-center justify-center">
                <HStack className="text-center px-10">
                    <Text size="lg">By clicking </Text> 
                    <Text size="lg" className="font-bold">'Create an account' </Text>
                    <Text size="lg">you agree with</Text>
                </HStack>
                <CustomLink href="http://azima.test/" isExternal={true}>
                    <HStack>
                    <LinkText className="text-red-700" size="lg"> terms and conditions </LinkText>
                    </HStack>
                </CustomLink>
                </Box>
            </ScrollView>
        </SafeAreaView>
    </ImageBackground>
  );
}