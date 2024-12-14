import { Input,InputField,InputSlot,InputIcon } from '@/components/ui/input';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView, FlatList  } from 'react-native';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from 'react-native-elements';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Grid, GridItem } from '@/components/ui/grid';
import { ChevronDownIcon,FashionIcon } from '@/components/IconsList';
import { Button, ButtonText} from '@/components/ui/button';
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';

export default function SearchNow() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <Card size="md" variant="filled" className="m-3 px-2 pt-5 shadow">
        <Box className="items-center">
          <Heading size="lg" className="mb-1"> Search For Products </Heading>
        </Box>

        <Box className="mt-2 p-2">
          <Box className="flex w-full mb-5">
            <Input className="w-full bg-white shadow rounded-l border-gray-300" size="lg">
              <InputField className="text-dark" placeholder="Search by name" />
            </Input>
          </Box>

          <Box className="mb-5">
            <Select className="bg-white">
              <SelectTrigger variant="outline" size="lg" className="w-full flex items-center justify-between px-2" >
                <SelectInput placeholder="Select by category" className="flex-1"  />
                <SelectIcon className="ml-2 pl-2 "  as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop/>
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <SelectItem
                    label="Backend Development"
                    value="backend"
                  />
                </SelectContent>
              </SelectPortal>
            </Select>      
          </Box>

          <Box className="">
            <Button size="lg" variant="solid" action="primary" className="shadow-outline bg-blue-700" >
              <ButtonText className="text-white">Search</ButtonText>
            </Button>
          </Box>
        </Box>
      </Card>
        
      <Box className="items-center mt-5 mb-2">
        <Text className="" size="2xl" bold={true}>Explore Categories</Text>
      </Box>

      <Grid className="gap-5 p-4 mt-2"_extra={{className: 'grid-cols-6'}}>
        <GridItem className="shadow" _extra={{className: 'col-span-3'}} >
          <Card size="md" variant="filled" className="p-2 items-center rounded-md bg-green-50">
            <FashionIcon  size={35} color="orange"/>
            <Text className="text-center" size="md" bold={true}> Health & Beauty</Text>
          </Card>
        </GridItem>
        <GridItem className="shadow" _extra={{className: 'col-span-3'}} >
          <Card size="md" variant="filled" className="p-2 items-center rounded-md bg-green-50">
            <FashionIcon  size={35} color="orange"/>
            <Text className="text-center" size="md" bold={true}> Health & Beauty</Text>
          </Card>
        </GridItem>
      </Grid>

    </SafeAreaView>
  );
}