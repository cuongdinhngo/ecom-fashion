import { faker } from "@faker-js/faker";

export function imagePath(image: string): string {
  return `/images/${image}`;
}

export function avatarImg(): string {
  return `/images/avatar-${faker.number.int({min: 1, max: 8})}.jpg`;
}

export function bannerImg(): string {
  return `/images/banner-${faker.number.int({min: 1, max: 6})}.jpg`;
}

export function categoryImg(): string {
  return `/images/c-${faker.number.int({min: 1, max: 20})}.jpg`;
}

export function smallProductImg(): string {
  return `/images/item-${faker.number.int({min: 1, max: 13})}.jpg`;
}

export function productImg(): string {
  return `/images/product-${faker.number.int({min: 1, max: 7})}.jpg`;
}