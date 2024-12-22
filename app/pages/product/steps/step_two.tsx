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

const StepTwo  = () => {
    return (
        <Box className="">
            <Heading bold={true} size="xl" className="font-mono antialiased">Step 2: Pricing & Categories</Heading>

            <Box className="mt-5 flex-1">
                {/* Product */}
                <Text size="md" className="mb-1">Selling Price/Charges <AsteriskIcon size={8} /></Text>
                <Input variant="outline" size="lg" className="rounded-md mb-4 border-gray-600">
                    <InputField className="" placeholder='Eg. 1000'/>
                </Input>

                {/* Section */}
                <Text size="lg" className="mb-1">Section <AsteriskIcon size={8} /></Text>
                <Select className="bg-white mb-4">
                <SelectTrigger variant="outline" size="lg" className="w-full flex items-center justify-between px-2 rounded-md border-dark-200" >
                    <SelectInput placeholder="Select section" className="flex-1"  />
                    <SelectIcon className="ml-2 pl-2 "  as={ChevronDownIcon} />
                </SelectTrigger>
                <SelectPortal>
                    <SelectBackdrop/>
                    <SelectContent>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="" value="" />
                    <SelectItem label="Health & Beauty" value="health_beauty" />
                    <SelectItem label="Electronics" value="electronics" />
                    <SelectItem label="Fashion" value="fashion" />
                    <SelectItem label="Home & Garden" value="home_garden" />
                    <SelectItem label="Sports & Outdoors" value="sports_outdoors" />
                    </SelectContent>
                </SelectPortal>
                </Select>      

                {/* Categories */}
                <Text size="lg" className="mb-1">Categories <AsteriskIcon size={8} /></Text>
                <Select className="bg-white mb-4">
                <SelectTrigger variant="outline" size="lg" className="w-full flex items-center justify-between px-2 rounded-md border-dark-200" >
                    <SelectInput placeholder="Select categories" className="flex-1"  />
                    <SelectIcon className="ml-2 pl-2 "  as={ChevronDownIcon} />
                </SelectTrigger>
                <SelectPortal>
                    <SelectBackdrop/>
                    <SelectContent>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="" value="" />
                    <SelectItem label="Electronics" value="electronics" />
                    <SelectItem label="Fashion" value="fashion" />
                    <SelectItem label="Home & Garden" value="home_garden" />
                    <SelectItem label="Sports & Outdoors" value="sports_outdoors" />
                    <SelectItem label="Health & Beauty" value="health_beauty" />
                    </SelectContent>
                </SelectPortal>
                </Select>  

                {/* Subcategories */}
                <Text size="lg" className="mb-1">Subcategories <AsteriskIcon size={8} /></Text>
                <Select className="bg-white mb-4">
                    <SelectTrigger variant="outline" size="lg" className="w-full flex items-center justify-between px-2 rounded-md border-dark-200" >
                        <SelectInput placeholder="Select subcategories" className="flex-1"  />
                        <SelectIcon className="ml-2 pl-2 "  as={ChevronDownIcon} />
                    </SelectTrigger>
                    <SelectPortal>
                        <SelectBackdrop/>
                        <SelectContent>
                            <SelectDragIndicatorWrapper>
                                <SelectDragIndicator />
                            </SelectDragIndicatorWrapper>
                            <SelectItem label="" value="" />
                            <SelectItem label="Skincare" value="skincare" />
                            <SelectItem label="Makeup" value="makeup" />
                            <SelectItem label="Laptops" value="laptops" />
                            <SelectItem label="Mobile Phones" value="mobile_phones" />
                            <SelectItem label="Men's Clothing" value="mens_clothing" />
                            <SelectItem label="Women's Clothing" value="womens_clothing" />
                            <SelectItem label="Furniture" value="furniture" />
                            <SelectItem label="Garden Tools" value="garden_tools" />
                            <SelectItem label="Fitness Equipment" value="fitness_equipment" />
                            <SelectItem label="Outdoor Gear" value="outdoor_gear" />
                        </SelectContent>
                    </SelectPortal>
                </Select>
                
                <Divider className="my-0.5 mb-5" />

            </Box>
        </Box>
    );
};

export default StepTwo;