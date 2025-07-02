import { faker } from "@faker-js/faker";

const deliverySteps = [
  {
    status: 'Packed',
    value: 0,
    description: 'Your order has been packed and is ready for delivery.',
    timestamp: useDateFormat(faker.date.past(), 'MMM, DD HH:mm'),
  },
  {
    status: 'On the Way to the Logistic Facility',
    value: 1,
    description: 'Your order is on the way to the logistic facility.',
    timestamp: useDateFormat(faker.date.past(), 'MMM, DD HH:mm'),
  },
  {
    status: 'Arrived at the Logistic Facility',
    value: 2,
    description: 'Your order has arrived at the logistic facility.',
    timestamp: useDateFormat(faker.date.past(), 'MMM, DD HH:mm'),
  },
  {
    status: 'Out for Delivery',
    value: 3,
    description: 'Your order is out for delivery.',
    timestamp: useDateFormat(faker.date.past(), 'MMM, DD HH:mm'),
  },
  {
    status: 'Shipping',
    value: 4,
    description: 'Your order is being shipped.',
    timestamp: useDateFormat(faker.date.past(), 'MMM, DD HH:mm'),
  },
];

const deliveredStep =   {
  status: 'Delivered',
  value: 5,
  description: 'Your order has been delivered.',
  timestamp: useDateFormat(faker.date.past(), 'MMM, DD HH:mm'),
};

const attempToDeliver =   {
  status: 'Attempt to Deliver',
  value: 5,
  description: 'An attempt to deliver your order was made but no one was available to receive it.',
  timestamp: useDateFormat(faker.date.past(), 'MMM, DD HH:mm'),
};

export const useTracker = () => {
  const getTrackerSteps = (status: string) => {
    switch (status) {
      case 'delivered':
        return [...deliverySteps, deliveredStep];
      case 'attempt-to-deliver':
        return [...deliverySteps, attempToDeliver];
      default:
        return deliverySteps;
    }
  }
    
  return {
    getTrackerSteps,
  }
}