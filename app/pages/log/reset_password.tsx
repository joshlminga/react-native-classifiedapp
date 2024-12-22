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

const ResetPassword: React.FC = () => {
    return (
        <ImageBackground 
            source={require('@/assets/images/cover/login-bg.png')} // Replace with your image path
            resizeMode="cover"
            style={{ flex: 1 }}
            >
            <SafeAreaView style={{ flex: 1 }} className="mt-20">
                <Stack.Screen options={{ title: '', headerBackTitle: 'Sign In' }} />

                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 5 }}>
                    <Box className="pt-7 mt-20 mb-5 px-4">
                        <Heading bold={true} size="2xl" className="font-mono antialiased text-green-700">Reset account password</Heading>
                    </Box>
                    <Box className="mb-5">
                        <Card size="md" variant="elevated"  className="mt-10 shadow-xl">
                            <Heading bold={true} size="xl" className="pb-7">Reset</Heading>

                            {/* Email */}
                            <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                                <InputField className=""
                                placeholder='Your account email'
                                />
                                <InputSlot className='p-2'>
                                    <AsteriskIcon size={10} />
                                </InputSlot>
                            </Input>

                            <Box className="mt-5">
                                <Button size="md" variant="solid" action="positive" className="bg-blue-600 hadow-lg">
                                    <ButtonText className="text-white">Reset Password</ButtonText>
                                </Button>
                            </Box>

                            <Divider className="my-10 mb-5" />

                            <Box className="mt-5 items-center">
                                <HStack className="mt-5">
                                <Text size="lg">I have an account: </Text>
                                <Link href={`pages/log/login`}>
                                    <HStack>
                                    <LinkText className="text-red-800 no-underline" size="lg">Sign in here</LinkText>
                                    </HStack>
                                </Link>
                                </HStack>
                            </Box>

                            <Box className="mt-0 items-center">
                                <HStack className="mt-2">
                                <Text size="lg">I Don't have an account: </Text>
                                <Link href={`pages/log/register`}>
                                    <HStack>
                                    <LinkText className="text-red-800 no-underline" size="lg">Sign up here</LinkText>
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
};

export default ResetPassword;
