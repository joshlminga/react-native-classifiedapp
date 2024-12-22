import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { AsteriskIcon, ChevronDownIcon,ArrowLeftIcon, ArrowRightIcon } from '@/components/IconsList';
import { Input,InputField,InputSlot } from '@/components/ui/input';
import {  FlatList  } from 'react-native';
import { Button, ButtonText} from '@/components/ui/button';
import { Textarea,TextareaInput } from '@/components/ui/textarea';

import { Link as CustomLink, LinkText } from '@/components/ui/link';
import { Stack,Link } from 'expo-router';

import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';

const StepThree  = () => {
    return (
        <Box className="">
            <Heading bold={true} size="xl" className="font-mono antialiased">Step 3: Description</Heading>

            <Box className="mt-5 flex-1">
                {/* Product */}
                <Text size="md" className="mb-1">Item Summary (800 max)  <AsteriskIcon size={8} /></Text>
                <Textarea size="md" isReadOnly={false} isInvalid={false} isDisabled={false}  className="w-full h-2/4 mb-4">
                    <TextareaInput placeholder="Enter here..." />
                </Textarea>
      
                {/* Tags */}
                <Text size="md" className="mb-1">Product / Item Tags (140 Max) </Text>
                <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                    <InputField className="" placeholder='Comma separated'/>
                </Input>

                <Divider className="my-0.5 mb-20" />

            </Box>
        </Box>
    );
};

export default StepThree;