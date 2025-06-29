import { faker } from '@faker-js/faker';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  relative: string;
  image: string;
  originalPrice: string;
  price: string;
  discount: number;
}

const defaultOptions = {
  quantity: 30, // Default number of products
  photoWidth: 200, // Default width for product images
  photoHeight: 300, // Default height for product images
};

type ProductOptions = {
  quantity: number;
  photoWidth: number;
  photoHeight: number;
};

export const CATEGORIES = [
  {
    title: 'Clothing',
    image: 'https://picsum.photos/50/50?random=1',
  },
  { title: 'Shoes',
    image: 'https://picsum.photos/50/50?random=2',
  },
  {
    title: 'Bags',
    image: 'https://picsum.photos/50/50?random=3',
  },
  {
    title: 'Lingerie',
    image: 'https://picsum.photos/50/50?random=4',
  },
  {
    title: 'Watch',
    image: 'https://picsum.photos/50/50?random=5',
  },
  {
    title: 'Hoodies',
    image: 'https://picsum.photos/50/50?random=6',
  }
];
const KINDS = [
  {
    category: 'Clothing',
    image: 'https://picsum.photos/50/50?random=6',
    relatives: [
      {
        title: 'T-Shirts',
        image: 'https://picsum.photos/50/50?random=7',
      },
      {
        title: 'Pants',
        image: 'https://picsum.photos/50/50?random=8',
      },
      {
        title: 'Dresses',
        image: 'https://picsum.photos/50/50?random=9',
      },
      {
        title: 'Jackets',
        image: 'https://picsum.photos/50/50?random=10',
      },
      {
        title: 'Skirts',
        image: 'https://picsum.photos/50/50?random=11',
      },
      {
        title: 'Shorts',
        image: 'https://picsum.photos/50/50?random=12',
      },
      {
        title: 'Sweaters',
        image: 'https://picsum.photos/50/50?random=13',
      },
      {
        title: 'Blouses',
        image: 'https://picsum.photos/50/50?random=14',
      }
    ],
  },
  {
    category: 'Shoes',
    image: 'https://picsum.photos/50/50?random=7',
    relatives: [
      {
        title: 'Sneakers',
        image: 'https://picsum.photos/50/50?random=15',
      },
      {
        title: 'Boots',
        image: 'https://picsum.photos/50/50?random=16',
      },
      {
        title: 'Sandals',
        image: 'https://picsum.photos/50/50?random=17',
      },
      {
        title: 'Loafers',
        image: 'https://picsum.photos/50/50?random=18',
      },
      {
        title: 'Heels',
        image: 'https://picsum.photos/50/50?random=19',
      },
      {
        title: 'Flats',
        image: 'https://picsum.photos/50/50?random=20',
      }
    ],
  },
  {
    category: 'Bags',
    image: 'https://picsum.photos/50/50?random=8',
    relatives: [
      {
        title: 'Handbags',
        image: 'https://picsum.photos/50/50?random=21',
      },
      {
        title: 'Backpacks',
        image: 'https://picsum.photos/50/50?random=22',
      },
      {
        title: 'Clutches',
        image: 'https://picsum.photos/50/50?random=23',
      },
      {
        title: 'Totes',
        image: 'https://picsum.photos/50/50?random=24',
      },
      {
        title: 'Crossbody Bags',
        image: 'https://picsum.photos/50/50?random=25',
      }
    ],
  },
  {
    category: 'Lingerie',
    image: 'https://picsum.photos/50/50?random=9',
    relatives: [
      {
        title: 'Bras',
        image: 'https://picsum.photos/50/50?random=26',
      },
      {
        title: 'Panties',
        image: 'https://picsum.photos/50/50?random=27',
      },
      {
        title: 'Loungewear',
        image: 'https://picsum.photos/50/50?random=28',
      },
      {
        title: 'Sleepwear',
        image: 'https://picsum.photos/50/50?random=29',
      }
    ],
  },
  {
    category: 'Watch',
    image: 'https://picsum.photos/50/50?random=10',
    relatives: [
      {
        title: 'Smart Watches',
        image: 'https://picsum.photos/50/50?random=30',
      },
      {
        title: 'Analog Watches',
        image: 'https://picsum.photos/50/50?random=31',
      },
      {
        title: 'Digital Watches',
        image: 'https://picsum.photos/50/50?random=32',
      }
    ],
  },
  {
    category: 'Hoodies',
    image: 'https://picsum.photos/50/50?random=11',
    relatives: [
      {
        title: 'Pullover Hoodies',
        image: 'https://picsum.photos/50/50?random=33',
      },
      {
        title: 'Zip-Up Hoodies',
        image: 'https://picsum.photos/50/50?random=34',
      }
    ],
  },
];

const SEARCH_TERMS = [
  'Clothing', 'Shoes', 'Bags', 'Lingerie', 'Watch', 'Hoodies',
  'T-Shirts', 'Pants', 'Dresses', 'Jackets', 'Skirts', 'Shorts', 'Sweaters', 'Blouses',
  'Sneakers', 'Boots', 'Sandals', 'Loafers', 'Heels', 'Flats',
  'Handbags', 'Backpacks', 'Clutches', 'Totes', 'Crossbody Bags',
  'Bras', 'Panties', 'Loungewear', 'Sleepwear',
  'Smartwatches', 'Analog Watches', 'Digital Watches',
  'Pullover Hoodies', 'Zip-Up Hoodies'
];

export const useProducts = (options: ProductOptions = defaultOptions) => {
  const products = Array.from({ length: options.quantity }, () => {
    const discount = faker.helpers.arrayElement([10, 20, 30, 40, 50]);
    const originalPrice = faker.commerce.price({ min: 10, max: 100, dec: 2 });
    const price = (parseFloat(originalPrice) * (1 - discount / 100)).toFixed(2);
    const category = faker.helpers.arrayElement(CATEGORIES).title;
    const relative = KINDS.find(item => item.category === category)?.relatives || [];
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      category: category,
      relative: relative.length > 0 ? faker.helpers.arrayElement(relative).title : '',
      image: `https://picsum.photos/${options.photoWidth}/${options.photoHeight}?random=` + faker.number.int({ min: 1, max: 1000 }),
      originalPrice: `$${originalPrice}`,
      price: `$${price}`,
      discount,
    };
  });

  const searchProducts = (searchTerms: string[]): Product[] => {
    // Filter products by matching category
    return products.filter(product => searchTerms.includes(product.category));
  }

  const searchRelatives = (searchTerms: string[]): Object[] => {
    // Return relatives' titles for the given categories
    const category = KINDS.filter(kind => searchTerms.includes(kind.category));
    if (category.length === 0) {
      return [];
    } else {
      return category.flatMap(kind => kind.relatives);
    }
  }

  return {
    products,
    SEARCH_TERMS,
    CATEGORIES,
    KINDS,
    searchProducts,
    searchRelatives
  };
}