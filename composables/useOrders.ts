import { faker } from "@faker-js/faker";

export interface Order {
  id: number;
  orderNumber: number;
  status: string;
  delivery: string;
  images: string[];
  quantity: number;
}

interface OrdersOptions {
  quantity: number;
}

const defaultOption = {
  quantity: 5
}

const deliveryOptions = [
  'Standard Delivery',
  'Express Delivery',
];

const orderStatuses = [
  'Packed',
  'Delivered',
  'Shipping',
  'Shipped',
];

export const useOrders = (options: OrdersOptions = defaultOption) => {
  const orders = Array.from({ length: options.quantity }, (_, i) => {
    const quantity = faker.number.int({ min: 1, max: 5 });
    return {
      id: i + 1,
      orderNumber: i + 1000,
      quantity: quantity,
      status: faker.helpers.arrayElement(orderStatuses),
      delivery: faker.helpers.arrayElement(deliveryOptions),
      images: Array.from({ length: quantity }, () => smallProductImg()),
    }
  });

  return {
    orders,
  }
}