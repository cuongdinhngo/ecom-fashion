import { faker } from "@faker-js/faker";

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
  const baseURL = getBaseURL();
  return `${baseURL}images/avatar-${faker.number.int({min: 1, max: 8})}.jpg`;
}

export function bannerImg(): string {
  const baseURL = getBaseURL();
  return `${baseURL}images/banner-${faker.number.int({min: 1, max: 6})}.jpg`;
}

export function categoryImg(): string {
  const baseURL = getBaseURL();
  return `${baseURL}images/c-${faker.number.int({min: 1, max: 20})}.jpg`;
}

export function smallProductImg(): string {
  const baseURL = getBaseURL();
  return `${baseURL}images/item-${faker.number.int({min: 1, max: 13})}.jpg`;
}

export function productImg(): string {
  const baseURL = getBaseURL();
  return `${baseURL}images/product-${faker.number.int({min: 1, max: 7})}.jpg`;
}