import { AsteriskIcon, ChevronDownIcon,ArrowLeftIcon, ArrowRightIcon } from '@/components/IconsList';
import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Button, ButtonText} from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';

import * as ImagePicker from 'expo-image-picker';

const StepFour: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <Box className="">
            <Heading bold={true} size="xl" className="font-mono antialiased">Step 4: Image Upload</Heading>

            <Box className="mt-5 flex-1">
                <Text size="md" className="mb-1">Upload a profile picture <AsteriskIcon size={8} /></Text>
                
                <Button size="md" variant="outline" action="positive" onPress={pickImage} className="border-yellow-500 shadow">
                    <ButtonText>Click to upload</ButtonText>
                </Button>
                {image && <Image source={{ uri: image }} style={styles.image} />}
            </Box>

            <Divider className="my-10 mb-5" />
        </Box>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
});

export default StepFour;