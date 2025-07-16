const deliverySteps = [
  {
    status: 'Packed',
    value: 0,
    description: 'Your order has been packed and is ready for delivery.',
    timestamp: 'Dec, 15 10:30',
  },
  {
    status: 'On the Way to the Logistic Facility',
    value: 1,
    description: 'Your order is on the way to the logistic facility.',
    timestamp: 'Dec, 15 14:20',
  },
  {
    status: 'Arrived at the Logistic Facility',
    value: 2,
    description: 'Your order has arrived at the logistic facility.',
    timestamp: 'Dec, 16 09:15',
  },
  {
    status: 'Out for Delivery',
    value: 3,
    description: 'Your order is out for delivery.',
    timestamp: 'Dec, 16 11:45',
  },
  {
    status: 'Shipping',
    value: 4,
    description: 'Your order is being shipped.',
    timestamp: 'Dec, 16 13:30',
  },
];

const deliveredStep =   {
  status: 'Delivered',
  value: 5,
  description: 'Your order has been delivered.',
  timestamp: 'Dec, 16 16:00',
};

const attempToDeliver =   {
  status: 'Attempt to Deliver',
  value: 5,
  description: 'An attempt to deliver your order was made but no one was available to receive it.',
  timestamp: 'Dec, 16 15:30',
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