import { faker } from "@faker-js/faker";

export function imagePath(image: string): string {
  const baseURL = process.env.NUXT_APP_BASE_URL || '/ecom-fashion/';
  return `${baseURL}images/${image}`;
}

export function avatarImg(): string {
  const baseURL = process.env.NUXT_APP_BASE_URL || '/ecom-fashion/';
  return `${baseURL}images/avatar-${faker.number.int({min: 1, max: 8})}.jpg`;
}

export function bannerImg(): string {
  const baseURL = process.env.NUXT_APP_BASE_URL || '/ecom-fashion/';
  return `${baseURL}images/banner-${faker.number.int({min: 1, max: 6})}.jpg`;
}

export function categoryImg(): string {
  const baseURL = process.env.NUXT_APP_BASE_URL || '/ecom-fashion/';
  return `${baseURL}images/c-${faker.number.int({min: 1, max: 20})}.jpg`;
}

export function smallProductImg(): string {
  const baseURL = process.env.NUXT_APP_BASE_URL || '/ecom-fashion/';
  return `${baseURL}images/item-${faker.number.int({min: 1, max: 13})}.jpg`;
}

export function productImg(): string {
  const baseURL = process.env.NUXT_APP_BASE_URL || '/ecom-fashion/';
  return `${baseURL}images/product-${faker.number.int({min: 1, max: 7})}.jpg`;
}