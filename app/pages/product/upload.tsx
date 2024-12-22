import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { SafeAreaView, ScrollView, ImageBackground  } from 'react-native';
import { AsteriskIcon, ChevronDownIcon,ArrowLeftIcon, ArrowRightIcon } from '@/components/IconsList';
import { Link as CustomLink, LinkText } from '@/components/ui/link';
import { Input,InputField,InputSlot } from '@/components/ui/input';
import { Button, ButtonText} from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Divider } from '@/components/ui/divider';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { View, StyleSheet } from 'react-native';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Link,Stack } from 'expo-router';
import React, { useState } from 'react';

import StepOne from './steps/step_one';
import StepTwo from './steps/step_two';
import StepThree from './steps/step_three';
import StepFour from './steps/step_four';

const ProductUploadWizard = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Form submitted');
  };

  const renderProgressBar = () => {
    const steps = [1, 2, 3, 4];
    return (
      <Box className="flex-1 flex-row items-center my-5 px-4 ml-20">
        {steps.map((stepNumber) => (
          <Box key={stepNumber} className="flex-1 flex flex-row items-center">
            <Box 
              style={[
                styles.progressDot,
                stepNumber <= step ? styles.activeDot : styles.inactiveDot
              ]} 
            />
            {stepNumber < 4 && (
              <Box 
                style={[
                  styles.progressLine,
                  stepNumber < step ? styles.activeLine : styles.inactiveLine
                ]} 
              />
            )}
          </Box>
        ))}
      </Box>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour/>;
      default:
        return null;
    }
  };

  return (
    <Box style={styles.container}>
        <Box className="mt-1 mb-5 items-center">
            {renderProgressBar()}
        </Box>

      <VStack space="md">

        <Box className="px-4">
            {renderStep()}
        </Box>

        <HStack space="md" className="mt-5 px-4 justify-between">
          {step > 1 && (
            <Button variant="solid" action="positive" onPress={handleBack} className="flex-1 mr-2">
              <ButtonText className="text-white"><ArrowLeftIcon size={12} color="white" /> Back</ButtonText>
            </Button>
          )}
          {step < 4 ? (
            <Button onPress={handleNext} className="flex-1 ml-2">
              <ButtonText>Next <ArrowRightIcon size={12} color="white" /></ButtonText>
            </Button>
          ) : (
            <Button onPress={handleSubmit} className="flex-1 ml-2">
              <ButtonText>Submit</ButtonText>
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  progressContainer: {
  },
  progressStep: {
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  activeDot: {
    backgroundColor: '#006AFF',
  },
  inactiveDot: {
    backgroundColor: '#E0E0E0',
  },
  progressLine: {
    flex: 1,
    height: 2,
    marginHorizontal: 4,
  },
  activeLine: {
    backgroundColor: '#006AFF',
  },
  inactiveLine: {
    backgroundColor: '#E0E0E0',
  },
  stepText: {
  },
});

export default ProductUploadWizard;