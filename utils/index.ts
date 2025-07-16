// Cache for generated images to prevent memory leaks
const imageCache = new Map<string, string>();

export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Static image pools for rotation
const avatarPool = [1, 2, 3, 4, 5, 6, 7, 8];
const bannerPool = [1, 2, 3, 4, 5, 6];
const categoryPool = Array.from({length: 20}, (_, i) => i + 1);
const productPool = Array.from({length: 13}, (_, i) => i + 1);
const largeProductPool = Array.from({length: 7}, (_, i) => i + 1);

// Counters for rotation
let avatarCounter = 0;
let bannerCounter = 0;
let categoryCounter = 0;
let productCounter = 0;
let largeProductCounter = 0;

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
  const avatarId = avatarPool[avatarCounter % avatarPool.length];
  avatarCounter++;
  
  const image = `${baseURL}images/avatar-${avatarId}.jpg`;
  imageCache.set(cacheKey, image);
  return image;
}

export function bannerImg(): string {
  const cacheKey = 'banner';
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }
  
  const baseURL = getBaseURL();
  const bannerId = bannerPool[bannerCounter % bannerPool.length];
  bannerCounter++;
  
  const image = `${baseURL}images/banner-${bannerId}.jpg`;
  imageCache.set(cacheKey, image);
  return image;
}

export function categoryImg(): string {
  const categoryId = categoryPool[categoryCounter % categoryPool.length];
  categoryCounter++;
  const cacheKey = `category-${categoryId}`;
  
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }
  
  const baseURL = getBaseURL();
  const image = `${baseURL}images/c-${categoryId}.jpg`;
  imageCache.set(cacheKey, image);
  return image;
}

export function smallProductImg(): string {
  const productId = productPool[productCounter % productPool.length];
  productCounter++;
  const cacheKey = `small-product-${productId}`;
  
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }
  
  const baseURL = getBaseURL();
  const image = `${baseURL}images/item-${productId}.jpg`;
  imageCache.set(cacheKey, image);
  return image;
}

export function productImg(): string {
  const productId = largeProductPool[largeProductCounter % largeProductPool.length];
  largeProductCounter++;
  const cacheKey = `product-${productId}`;
  
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }
  
  const baseURL = getBaseURL();
  const image = `${baseURL}images/product-${productId}.jpg`;
  imageCache.set(cacheKey, image);
  return image;
}