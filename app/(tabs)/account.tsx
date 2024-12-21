import { SafeAreaView, FlatList,Platform} from 'react-native';
import { Text } from '@/components/ui/text';

export default function AccountNow() {
  return (
    <SafeAreaView className="bg-white">
      <Text className="text-background-dark">Account</Text>
    </SafeAreaView>
  );
}