import { Input,InputField,InputSlot,InputIcon } from '@/components/ui/input';
import { SafeAreaView, ScrollView, FlatList  } from 'react-native';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Image } from '@/components/ui/image';
import { Grid, GridItem } from '@/components/ui/grid';
import { ChevronDownIcon,FashionIcon } from '@/components/IconsList';
import { Button, ButtonText} from '@/components/ui/button';
import { Link,LinkText } from '@/components/ui/link';
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';

export default function SellNow() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView>
        <Box className="m-20 items-center">
          <Heading size="xl" className="mb-1"> Create an account </Heading>
          <HStack className="mt-2">
            <Text size="lg">Already have an account? </Text>
            <Link href="#">
              <HStack>
                <LinkText className="text-red-700" size="lg">Login</LinkText>
              </HStack>
            </Link>
          </HStack>
        </Box>

        <Box className="mt-6">
          
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}