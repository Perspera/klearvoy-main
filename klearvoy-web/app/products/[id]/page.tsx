import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getProducts } from '@/lib/sanity-fetch';
import type { Product } from '@/lib/sanity-fetch';
import { notFound } from 'next/navigation';
import 'server-only';

// Server Component to fetch data
async function ProductDetailServer({ params }: { params: { id: string } }) {
  const [product, allProducts] = await Promise.all([
    getProductBySlug(params.id),
    getProducts()
  ]);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = allProducts
    .filter(p => p._id !== product._id && p.category === product.category)
    .slice(0, 3);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}

// Client Component for rendering
'use client';
import { useTranslation } from 'react-i18next';

function ProductDetailClient({ product, relatedProducts }: { product: Product; relatedProducts: Product[] }) {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const categoryNames: Record<string, { en: string; zh: string }> = {
    wardrobe: { en: 'Wardrobe Hardware', zh: '衣柜五金' },
    board: { en: 'Board Materials', zh: '板材' },
    engineering: { en: 'Engineering Solutions', zh: '工程解决方案' },
    handle: { en: 'Handles & Knobs', zh: '拉手旋钮' },
    hinge: { en: 'Hinges', zh: '铰链' },
    slide: { en: 'Slides', zh: '滑轨' },
  };

  const categoryName = categoryNames[product.category] || { en: product.category, zh: product.category };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src={product.image.asset.url}
            alt={isZh ? (product.nameZh || product.name) : product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <h1 className="text-5xl md:text-6xl font-heading text-white">
            {isZh ? (product.nameZh || product.name) : product.name}
          </h1>
          <p className="text-white/80 mt-4 text-lg">
            {isZh ? categoryName.zh : categoryName.en}
          </p>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Product Image */}
            <div className="relative h-[500px] bg-card-bg">
              <Image
                src={product.image.asset.url}
                alt={isZh ? (product.nameZh || product.name) : product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-3xl font-heading text-primary mb-6">
                {isZh ? (product.nameZh || product.name) : product.name}
              </h2>
              <p className="text-secondary leading-relaxed mb-8">
                {isZh ? (product.descriptionZh || product.description) : product.description}
              </p>
              
              {product.price && (
                <div className="mb-8">
                  <h3 className="text-lg font-heading text-primary mb-2">{t('product.price')}</h3>
                  <p className="text-xl font-medium text-accent-dark">{product.price}</p>
                </div>
              )}

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-heading text-primary mb-4">{t('product.features')}</h3>
                <ul className="space-y-2">
                  {(isZh ? (product.featuresZh || product.features) : product.features).map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-accent-dark font-medium">•</span>
                      <span className="text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specs */}
              {product.technicalSpecs && (
                <div className="mb-8">
                  <h3 className="text-lg font-heading text-primary mb-4">{t('product.specs')}</h3>
                  <div className="space-y-2">
                    {product.technicalSpecs.material && (
                      <div className="flex justify-between">
                        <span className="text-secondary font-medium">{t('product.material')}:</span>
                        <span className="text-primary">{product.technicalSpecs.material}</span>
                      </div>
                    )}
                    {product.technicalSpecs.finish && (
                      <div className="flex justify-between">
                        <span className="text-secondary font-medium">{t('product.finish')}:</span>
                        <span className="text-primary">{product.technicalSpecs.finish}</span>
                      </div>
                    )}
                    {product.technicalSpecs.weightCapacity && (
                      <div className="flex justify-between">
                        <span className="text-secondary font-medium">{t('product.weightCapacity')}:</span>
                        <span className="text-primary">{product.technicalSpecs.weightCapacity}</span>
                      </div>
                    )}
                    {product.technicalSpecs.warranty && (
                      <div className="flex justify-between">
                        <span className="text-secondary font-medium">{t('product.warranty')}:</span>
                        <span className="text-primary">{product.technicalSpecs.warranty}</span>
                      </div>
                    )}
                    {product.technicalSpecs.dimensions && (
                      <div className="flex justify-between">
                        <span className="text-secondary font-medium">{t('product.dimensions')}:</span>
                        <span className="text-primary">{product.technicalSpecs.dimensions}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Customization */}
              {product.isCustomizable && (
                <div className="mb-8">
                  <div className="bg-accent/10 p-6 rounded">
                    <h3 className="text-lg font-heading text-primary mb-2">{t('product.customization')}</h3>
                    <p className="text-secondary">{t('product.customizationDesc')}</p>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-8 py-4 text-sm font-medium tracking-wider hover:bg-secondary transition-smooth cursor-pointer text-center"
                >
                  {t('product.getQuote')}
                </Link>
                <Link
                  href="/products"
                  className="border border-primary text-primary px-8 py-4 text-sm font-medium tracking-wider hover:bg-primary hover:text-white transition-smooth cursor-pointer text-center"
                >
                  {t('product.backToProducts')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-card-bg">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-heading text-primary mb-12 text-center">{t('product.related')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map(relatedProduct => (
                <Link
                  key={relatedProduct._id}
                  href={`/products/${relatedProduct.slug.current}`}
                  className="group block"
                >
                  <div className="relative h-64 overflow-hidden mb-4 bg-white">
                    <Image
                      src={relatedProduct.image.asset.url}
                      alt={isZh ? (relatedProduct.nameZh || relatedProduct.name) : relatedProduct.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-smooth duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-heading text-primary mb-2">
                    {isZh ? (relatedProduct.nameZh || relatedProduct.name) : relatedProduct.name}
                  </h3>
                  <p className="text-secondary line-clamp-2">
                    {isZh ? (relatedProduct.descriptionZh || relatedProduct.description) : relatedProduct.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ProductDetailServer;