import sanityClient from './sanity';

export interface Product {
  _id: string;
  name: string;
  nameZh?: string;
  slug: { current: string };
  category: string;
  description: string;
  descriptionZh?: string;
  features: string[];
  featuresZh?: string[];
  image: { asset: { url: string } };
  gallery?: { asset: { url: string } }[];
  price?: string;
  isCustomizable: boolean;
  technicalSpecs?: {
    material?: string;
    finish?: string;
    weightCapacity?: string;
    warranty?: string;
    dimensions?: string;
  };
}

export interface CaseStudy {
  _id: string;
  title: string;
  titleZh?: string;
  slug: { current: string };
  client: string;
  clientZh?: string;
  category?: string;
  description: string;
  descriptionZh?: string;
  image: { asset: { url: string } };
  gallery?: { asset: { url: string } }[];
  date?: string;
  location?: string;
  projectValue?: string;
}

export interface News {
  _id: string;
  title: string;
  titleZh?: string;
  slug: { current: string };
  category?: string;
  excerpt: string;
  excerptZh?: string;
  content: string;
  contentZh?: string;
  image?: { asset: { url: string } };
  date: string;
  author?: string;
  isFeatured?: boolean;
}

export interface Page {
  _id: string;
  title: string;
  titleZh?: string;
  slug: { current: string };
  pageType: string;
  metaTitle?: string;
  metaTitleZh?: string;
  metaDescription?: string;
  metaDescriptionZh?: string;
  heroTitle?: string;
  heroTitleZh?: string;
  heroSubtitle?: string;
  heroSubtitleZh?: string;
  heroImage?: { asset: { url: string } };
}

export async function getProducts(): Promise<Product[]> {
  const query = `
    *[_type == "product"] | order(sortOrder asc) {
      _id,
      name,
      nameZh,
      slug,
      category,
      description,
      descriptionZh,
      features,
      featuresZh,
      image,
      gallery,
      price,
      isCustomizable,
      technicalSpecs
    }
  `;
  return await sanityClient.fetch(query);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const query = `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      nameZh,
      slug,
      category,
      description,
      descriptionZh,
      features,
      featuresZh,
      image,
      gallery,
      price,
      isCustomizable,
      technicalSpecs
    }
  `;
  return await sanityClient.fetch(query, { slug });
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const query = `
    *[_type == "product" && category == $category] | order(sortOrder asc) {
      _id,
      name,
      nameZh,
      slug,
      category,
      description,
      descriptionZh,
      features,
      featuresZh,
      image,
      gallery,
      price,
      isCustomizable,
      technicalSpecs
    }
  `;
  return await sanityClient.fetch(query, { category });
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const query = `
    *[_type == "caseStudy"] | order(sortOrder asc) {
      _id,
      title,
      titleZh,
      slug,
      client,
      clientZh,
      category,
      description,
      descriptionZh,
      image,
      gallery,
      date,
      location,
      projectValue
    }
  `;
  return await sanityClient.fetch(query);
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const query = `
    *[_type == "caseStudy" && slug.current == $slug][0] {
      _id,
      title,
      titleZh,
      slug,
      client,
      clientZh,
      category,
      description,
      descriptionZh,
      image,
      gallery,
      date,
      location,
      projectValue
    }
  `;
  return await sanityClient.fetch(query, { slug });
}

export async function getNews(): Promise<News[]> {
  const query = `
    *[_type == "news"] | order(date desc, sortOrder asc) {
      _id,
      title,
      titleZh,
      slug,
      category,
      excerpt,
      excerptZh,
      content,
      contentZh,
      image,
      date,
      author,
      isFeatured
    }
  `;
  return await sanityClient.fetch(query);
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
  const query = `
    *[_type == "news" && slug.current == $slug][0] {
      _id,
      title,
      titleZh,
      slug,
      category,
      excerpt,
      excerptZh,
      content,
      contentZh,
      image,
      date,
      author,
      isFeatured
    }
  `;
  return await sanityClient.fetch(query, { slug });
}

export async function getFeaturedNews(): Promise<News[]> {
  const query = `
    *[_type == "news" && isFeatured == true] | order(date desc) {
      _id,
      title,
      titleZh,
      slug,
      category,
      excerpt,
      excerptZh,
      content,
      contentZh,
      image,
      date,
      author,
      isFeatured
    }
  `;
  return await sanityClient.fetch(query);
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  const query = `
    *[_type == "page" && slug.current == $slug && isPublished == true][0] {
      _id,
      title,
      titleZh,
      slug,
      pageType,
      metaTitle,
      metaTitleZh,
      metaDescription,
      metaDescriptionZh,
      heroTitle,
      heroTitleZh,
      heroSubtitle,
      heroSubtitleZh,
      heroImage
    }
  `;
  return await sanityClient.fetch(query, { slug });
}

export async function getPageByType(pageType: string): Promise<Page | null> {
  const query = `
    *[_type == "page" && pageType == $pageType && isPublished == true][0] {
      _id,
      title,
      titleZh,
      slug,
      pageType,
      metaTitle,
      metaTitleZh,
      metaDescription,
      metaDescriptionZh,
      heroTitle,
      heroTitleZh,
      heroSubtitle,
      heroSubtitleZh,
      heroImage
    }
  `;
  return await sanityClient.fetch(query, { pageType });
}