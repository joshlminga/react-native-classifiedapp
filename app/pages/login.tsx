import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { AsteriskIcon, ChevronDownIcon } from '@/components/IconsList';
import { Input,InputField,InputSlot } from '@/components/ui/input';
import { SafeAreaView, ScrollView, FlatList  } from 'react-native';
import { Button, ButtonText} from '@/components/ui/button';
import { Link,LinkText } from '@/components/ui/link';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Stack } from 'expo-router';

export default function SellNow() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <Stack.Screen  options={{title: 'Login', headerBackTitle: 'Register'}} />
      <ScrollView>
        <Box className="mt-20 mb-5 px-4 items-center">
          <Text>Login Page</Text>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}