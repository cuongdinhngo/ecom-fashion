import { faker } from "@faker-js/faker";

// Cache for generated images to prevent memory leaks
const imageCache = new Map<string, string>();

function getBaseURL(): string {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // For GitHub Pages, check if we're on the subdomain
    if (window.location.hostname === 'cuongdinhngo.github.io' && window.location.pathname.startsWith('/ecom-fashion/')) {
      return '/ecom-fashion/';
    }
    // For mobile app or local development
    return '/';
  }
  // Server-side rendering fallback
  return process.env.NUXT_APP_BASE_URL || '/';
}

export function imagePath(image: string): string {
  const baseURL = getBaseURL();
  return `${baseURL}images/${image}`;
}

export function avatarImg(): string {
  const cacheKey = 'avatar';
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }
  
  const baseURL = getBaseURL();
  const image = `${baseURL}images/avatar-${faker.number.int({min: 1, max: 8})}.jpg`;
  imageCache.set(cacheKey, image);
  return image;
}

export function bannerImg(): string {
  const cacheKey = 'banner';
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }
  
  const baseURL = getBaseURL();
  const image = `${baseURL}images/banner-${faker.number.int({min: 1, max: 6})}.jpg`;
  imageCache.set(cacheKey, image);
  return image;
}

export function categoryImg(): string {
  const randomId = faker.number.int({min: 1, max: 20});
  const cacheKey = `category-${randomId}`;
  
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }
  
  const baseURL = getBaseURL();
  const image = `${baseURL}images/c-${randomId}.jpg`;
  imageCache.set(cacheKey, image);
  return image;
}

export function smallProductImg(): string {
  const randomId = faker.number.int({min: 1, max: 13});
  const cacheKey = `small-product-${randomId}`;
  
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }
  
  const baseURL = getBaseURL();
  const image = `${baseURL}images/item-${randomId}.jpg`;
  imageCache.set(cacheKey, image);
  return image;
}

export function productImg(): string {
  const randomId = faker.number.int({min: 1, max: 7});
  const cacheKey = `product-${randomId}`;
  
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }
  
  const baseURL = getBaseURL();
  const image = `${baseURL}images/product-${randomId}.jpg`;
  imageCache.set(cacheKey, image);
  return image;
}