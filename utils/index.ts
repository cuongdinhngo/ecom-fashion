import { faker } from "@faker-js/faker";

export function imagePath(image: string): string {
  return `${useRuntimeConfig().app.baseURL}/images/${image}`;
}

export function avatarImg(): string {
  return `${useRuntimeConfig().app.baseURL}/images/avatar-${faker.number.int({min: 1, max: 8})}.jpg`;
}

export function bannerImg(): string {
  return `${useRuntimeConfig().app.baseURL}/images/banner-${faker.number.int({min: 1, max: 2})}.jpg`;
}

export function categoryImg(): string {
  return `${useRuntimeConfig().app.baseURL}/images/c-${faker.number.int({min: 1, max: 20})}.jpg`;
}

export function smallProductImg(): string {
  return `${useRuntimeConfig().app.baseURL}/images/item-${faker.number.int({min: 1, max: 16})}.jpg`;
}

export function productImg(): string {
  return `${useRuntimeConfig().app.baseURL}/images/product-${faker.number.int({min: 1, max: 7})}.jpg`;
}