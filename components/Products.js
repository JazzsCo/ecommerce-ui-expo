import { FlatList } from 'react-native'

import { products } from '../products'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <FlatList data={products} keyExtractor={(product) =>product.id} renderItem={({item}) => <ProductItem {...item}/>}/>
  )
}

export default Products