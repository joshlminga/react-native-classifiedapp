import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Image } from '@/components/ui/image';

export default function ImageCarousel() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
                  <Image
          source={require('../assets/images/slide/farm-machinery.jpg')}
          alt="Logo"
          size='none'
          className="aspect-[320/208] w-full max-w-[320px]"
        />      
        </View>
        <View style={styles.page} key="2">
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});