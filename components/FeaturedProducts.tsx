import products from '../assets/product/list.json';
import { FlatList,Dimensions } from 'react-native';
import ProductListItem from '../components/ProductList';

export default function featuredProducts() {
    const width = Dimensions.get("window").width;
    const columnsNumber = width > 450 ? 3 : 2;

    return (
        <FlatList 
            data={products} 
            key={columnsNumber}
            numColumns={columnsNumber}
            className="mx-auto w-full"
            contentContainerClassName="gap-2"
            columnWrapperClassName="gap-2"
            nestedScrollEnabled={true}
            renderItem={( {item} ) => <ProductListItem product={item} />} />
    );
}