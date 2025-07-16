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

const staticOrders = [
  {
    id: 1,
    orderNumber: 1000,
    quantity: 3,
    status: 'Delivered',
    delivery: 'Standard Delivery',
    images: ['/images/item-1.jpg', '/images/item-2.jpg', '/images/item-3.jpg'],
  },
  {
    id: 2,
    orderNumber: 1001,
    quantity: 2,
    status: 'Shipping',
    delivery: 'Express Delivery',
    images: ['/images/item-4.jpg', '/images/item-5.jpg'],
  },
  {
    id: 3,
    orderNumber: 1002,
    quantity: 4,
    status: 'Shipping',
    delivery: 'Express Delivery',
    images: ['/images/item-1.jpg', '/images/item-2.jpg', '/images/item-3.jpg', '/images/item-4.jpg'],
  },
  {
    id: 4,
    orderNumber: 1004,
    quantity: 1,
    status: 'Shipping',
    delivery: 'Express Delivery',
    images: ['/images/item-2.jpg'],
  },
  {
    id: 5,
    orderNumber: 1002,
    quantity: 5,
    status: 'Shipping',
    delivery: 'Express Delivery',
    images: ['/images/item-1.jpg', '/images/item-2.jpg', '/images/item-3.jpg', '/images/item-4.jpg'],
  },
];

export const useOrders = (options: OrdersOptions = defaultOption) => {
  const orders = staticOrders.slice(0, options.quantity);

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