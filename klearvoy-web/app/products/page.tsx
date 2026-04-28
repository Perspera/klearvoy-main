import { getProducts } from '@/lib/sanity-fetch';
import ProductsClient from './ProductsClient';
import 'server-only';

async function ProductsServer() {
  const products = await getProducts();
  return <ProductsClient products={products} />;
}

export default ProductsServer;