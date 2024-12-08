import { FlatList } from 'react-native';
import { Button, ButtonText} from '@/components/ui/button';


export default function categoriesList() {

    const buttonsData = [
        { label: 'All', variant:'solid', action:'positive' ,class:'mr-2 rounded-xl', classtxt:''},
        { label: 'Health & Beauty', variant:'outline', action:null ,class:'border-black mr-2 rounded-xl', classtxt:'text-black'},
        { label: 'Electronics', variant:'outline', action:null ,class:'border-black text-black mr-2 rounded-xl', classtxt:'text-black'},
        { label: 'Sporting Goods', variant:'outline', action:null ,class:'border-black text-black mr-2 rounded-xl', classtxt:'text-black'},
        { label: 'Home & Office', variant:'outline', action:null ,class:'border-black text-black mr-2 rounded-xl', classtxt:'text-black'},
        { label: 'Fashion', variant:'outline', action:null ,class:'border-black text-black mr-2 rounded-xl', classtxt:'text-black'},
        { label: 'Garden & Outdoor', variant:'outline', action:null ,class:'border-black text-black mr-2 rounded-xl', classtxt:'text-black'},
        { label: 'Phones & Tablets', variant:'outline', action:null ,class:'border-black text-black mr-2 rounded-xl', classtxt:'text-black'},
        { label: 'Gaming', variant:'outline', action:null ,class:'border-black text-black mr-2 rounded-xl', classtxt:'text-black'},
        { label: 'Machinery', variant:'outline', action:null ,class:'border-black text-black mr-2 rounded-xl', classtxt:'text-black'},
        { label: 'Computing', variant:'outline', action:null ,class:'border-black text-black mr-2 rounded-xl', classtxt:'text-black'},
        { label: 'Baby Products', variant:'outline', action:null ,class:'border-black text-black mr-2 rounded-xl', classtxt:'text-black'},
        { label: 'Other Categories', variant:'outline', action:null ,class:'border-black text-black mr-2 rounded-xl', classtxt:'text-black'},
        // ... other buttons
    ];

    return (
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={buttonsData}
        renderItem={({ item }) => (
            <Button
            size="sm"
            variant={item.variant}
            action={item.action ? item.action : 'default'}
            className={item.class} // Add mr-2 for margin-right
            >
            <ButtonText className={item.classtxt}>{item.label}</ButtonText>
            </Button>
        )}
        keyExtractor={(item) => item.label}
        />
    );
}