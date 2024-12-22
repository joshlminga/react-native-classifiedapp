import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { AsteriskIcon, ChevronDownIcon } from '@/components/IconsList';
import { Input,InputField,InputSlot } from '@/components/ui/input';
import { SafeAreaView, ScrollView, FlatList,Platform  } from 'react-native';
import { Button, ButtonText} from '@/components/ui/button';

import { Link as CustomLink, LinkText } from '@/components/ui/link';
import { Stack,Link } from 'expo-router';

import ProductUploadWizard from '../pages/product/upload';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';

export default function SellNow() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView>
        <Box className="mt-10 mb-5 items-center">
          <Heading bold={true} size="3xl" className={`${Platform.OS === 'android' ? 'mt-10' : ''} font-mono antialiased text-green-700`}>Start Selling</Heading>

          <HStack className="mt-2">
            <Text size="lg">Already have an account? </Text>
            <Link href={`pages/log/login`}>
              <HStack>
                <LinkText className="text-red-700" size="lg">Sign in</LinkText>
              </HStack>
            </Link>
          </HStack>
        </Box>

        <ProductUploadWizard />

      </ScrollView>
    </SafeAreaView>
  );
}