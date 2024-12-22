import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { SafeAreaView, ScrollView, ImageBackground  } from 'react-native';
import { AsteriskIcon, ChevronDownIcon } from '@/components/IconsList';
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
    const steps = [
      { number: 1, label: 'Step 1' },
      { number: 2, label: 'Step 2' },
      { number: 3, label: 'Step 3' },
      { number: 4, label: 'Step 4' }
    ];
    
    return (
      <View style={styles.progressContainer}>
        {steps.map((stepItem) => (
          <View key={stepItem.number} style={styles.progressStep}>
            <Text style={[
              styles.stepLabel,
              stepItem.number <= step ? styles.activeLabel : styles.inactiveLabel
            ]}>
              {stepItem.label}
            </Text>
            <View style={styles.dotLineContainer}>
              <View 
                style={[
                  styles.progressDot,
                  stepItem.number <= step ? styles.activeDot : styles.inactiveDot
                ]} 
              />
              {stepItem.number < 4 && (
                <View 
                  style={[
                    styles.progressLine,
                    stepItem.number < step ? styles.activeLine : styles.inactiveLine
                  ]} 
                />
              )}
            </View>
          </View>
        ))}
      </View>
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Text style={styles.stepText}>Step 1: Basic Information</Text>;
      case 2:
        return <Text style={styles.stepText}>Step 2: Pricing</Text>;
      case 3:
        return <Text style={styles.stepText}>Step 3: Description</Text>;
      case 4:
        return <Text style={styles.stepText}>Step 4: Images</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {renderProgressBar()}

      <VStack space="md">
        {renderStep()}

        <HStack space="md" mt={4}>
          {step > 1 && (
            <Button variant="outline" onPress={handleBack}>
              <ButtonText>Back</ButtonText>
            </Button>
          )}
          {step < 4 ? (
            <Button onPress={handleNext}>
              <ButtonText>Next</ButtonText>
            </Button>
          ) : (
            <Button onPress={handleSubmit}>
              <ButtonText>Submit</ButtonText>
            </Button>
          )}
        </HStack>
      </VStack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  progressStep: {
    flex: 1,
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    marginBottom: 8,
  },
  activeLabel: {
    color: '#006AFF',
  },
  inactiveLabel: {
    color: '#9E9E9E',
  },
  dotLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
});

export default ProductUploadWizard;