import {Pressable} from "react-native";
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Badge,BadgeText } from '@/components/ui/badge';

export default function Products({product: this_product}) {

    return (
        <Pressable className="flex-1">
            <Card size="sm" variant="filled"  className="bg-transparent">
                <Box className="bg-gray-200 rounded-3xl flex">
                    <Image
                    source={{
                        uri: this_product.image,
                    }}
                    alt="Logo"
                    size='none'
                    className="w-screen rounded-2xl p-2 h-[180px]"
                    resizeMode="contain"
                    /> 
                </Box>  
                <Box className="flex mt-1 px-2">
                <HStack space="md" className="justify-between">
                    <Box  className="flex-shrink-0">
                        <Heading size="sm" className="text-red-700">
                            Ksh {this_product.price}
                        </Heading>
                    </Box>
                    {/* <Box className="flex-shrink-0">
                        <Text className="text-black text-sm"> 
                            Garden & Outdoor 
                        </Text>
                        <Badge size="sm" variant="solid" action="success" className="ml-1">
                            <BadgeText>Nairobi, Kenya</BadgeText>
                        </Badge>
                    </Box> */}
                </HStack>
                </Box>
                <Heading size="md" className="mb-4 px-2 truncate" numberOfLines={1}  ellipsizeMode="tail">
                    {this_product.name.substring(0, 20)}
                </Heading>        
            </Card>
        </Pressable>
    );

}