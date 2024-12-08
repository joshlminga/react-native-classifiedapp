import React from 'react';
import { Box } from '@/components/ui/box';
import { Image } from '@/components/ui/image';
import { View, StyleSheet, Dimensions } from 'react-native';

// Get screen width dynamically
const screenWidth = Dimensions.get('window').width;

// Calculate height for 16:9 aspect ratio
const bannerHeight = screenWidth * 9 / 16;

const Banner = ({ source = '' }) => {
  return (
    <Box className="flex w-full max-w-4xl rounded-lg px-4 ">
      <Image
        source={source} // Dynamic image source passed as a prop
         alt="Logo"
        size="none"
        className="rounded-2xl h-40 w-full bg-center"
        width={20}
      />
    </Box>
  );
};

export default Banner;
