import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { AsteriskIcon, ChevronDownIcon,ArrowLeftIcon, ArrowRightIcon } from '@/components/IconsList';
import { Input,InputField,InputSlot } from '@/components/ui/input';
import {  FlatList  } from 'react-native';
import { Button, ButtonText} from '@/components/ui/button';

import { Link as CustomLink, LinkText } from '@/components/ui/link';
import { Stack,Link } from 'expo-router';

import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';

const StepOne  = () => {
    return (
        <Box className="">
            <Heading bold={true} size="xl" className="font-mono antialiased">Step 1: Basic Info</Heading>

            <Box className="mt-5 flex-1">
                {/* Product */}
                <Text size="md" className="mb-1">Product / Item Title <AsteriskIcon size={8} /></Text>
                <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                <InputField className=""
                    placeholder='Eg.. Iphone 14 Pro Max'
                />
                <InputSlot className='p-2'>
                    
                </InputSlot>
                </Input>

                {/* Country */}
                <Text size="lg" className="mb-1">Select Country <AsteriskIcon size={8} /></Text>
                <Select className="bg-white mb-4">
                <SelectTrigger variant="outline" size="lg" className="w-full flex items-center justify-between px-2 rounded-md border-dark-200" >
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
                <Text size="lg" className="mb-1">Select City <AsteriskIcon size={8} /></Text>
                <Select className="bg-white mb-4">
                <SelectTrigger variant="outline" size="lg" className="w-full flex items-center justify-between px-2 rounded-md border-dark-200" >
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
                
                <HStack className="space-x-4">
                    <Box className="flex-1 pr-1">
                        <Text size="lg" className="mb-1">Type of Stock <AsteriskIcon size={8} /></Text>
                        <Select className="bg-white mb-4">
                            <SelectTrigger variant="outline" size="lg" className="w-full flex items-center justify-between px-2 rounded-md border-dark-200" >
                                <SelectInput placeholder="Select" className="flex-1"  />
                                <SelectIcon className="ml-2 pl-2 "  as={ChevronDownIcon} />
                            </SelectTrigger>
                            <SelectPortal>
                                <SelectBackdrop/>
                                <SelectContent>
                                    <SelectDragIndicatorWrapper>
                                        <SelectDragIndicator />
                                    </SelectDragIndicatorWrapper>
                                    <SelectItem label="" value="" />
                                    <SelectItem label="Physical Good" value="option1" />
                                    <SelectItem label="Downloadable Document / Ebook" value="option2"/>
                                    <SelectItem label="Digital Art / Image" value="option3"/>
                                    <SelectItem label="Digital Code / Gift Cards" value="option4"/>
                                </SelectContent>
                            </SelectPortal>
                        </Select>
                    </Box>
                    <Box className="flex-1 pl-1">
                        <Text size="lg" className="mb-1">Product Condition <AsteriskIcon size={8} /></Text>
                        <Select className="bg-white mb-4">
                            <SelectTrigger variant="outline" size="lg" className="w-full flex items-center justify-between px-2 rounded-md border-dark-200" >
                                <SelectInput placeholder="Select option 2" className="flex-1"  />
                                <SelectIcon className="ml-2 pl-2 "  as={ChevronDownIcon} />
                            </SelectTrigger>
                            <SelectPortal>
                                <SelectBackdrop/>
                                <SelectContent>
                                    <SelectDragIndicatorWrapper>
                                        <SelectDragIndicator />
                                    </SelectDragIndicatorWrapper>
                                    <SelectItem label="" value="" />
                                    <SelectItem label="New" value="optionA" />
                                    <SelectItem label="Used" value="optionB"/>
                                    <SelectItem label="Refurbished" value="optionC"/>
                                </SelectContent>
                            </SelectPortal>
                        </Select>
                    </Box>
                </HStack>

                <Divider className="my-0.5 mb-5" />

            </Box>
        </Box>
    );
};

export default StepOne;