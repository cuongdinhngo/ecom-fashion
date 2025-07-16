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
  quantity: 2
}

const deliveryOptions = [
  'Standard Delivery',
  'Express Delivery',
];

const orderStatuses = [
  'Delivered',
  'Shipping',
];

export const useOrders = (options: OrdersOptions = defaultOption) => {
  const orders = Array.from({ length: options.quantity }, (_, i) => {
    const quantity = faker.number.int({ min: 1, max: 5 });
    const baseImages = Array.from({ length: quantity }, (_, imgIndex) => 
      smallProductImg() // Generate once and reuse
    );
    
    return {
      id: i + 1,
      orderNumber: i + 1000,
      quantity: quantity,
      status: faker.helpers.arrayElement(orderStatuses),
      delivery: faker.helpers.arrayElement(deliveryOptions),
      images: baseImages,
    }
  });

  const getOrderList = () => {
    return orders;
  }

  const loadOrderFunction = (aliasFunction: string) => {
    console.log('Loading order function for alias => ', aliasFunction);
    switch (aliasFunction) {
      case 'load-order-list':
        return getOrderList();
    }
  }

  return {
    orders,
    getOrderList,
    loadOrderFunction
  }
}