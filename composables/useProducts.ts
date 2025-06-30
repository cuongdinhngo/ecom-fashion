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
    image: categoryImg(),
  },
  { title: 'Shoes',
    image: categoryImg(),
  },
  {
    title: 'Bags',
    image: categoryImg(),
  },
  {
    title: 'Lingerie',
    image: categoryImg(),
  },
  {
    title: 'Watch',
    image: categoryImg(),
  },
  {
    title: 'Hoodies',
    image: categoryImg(),
  }
];
const KINDS = [
  {
    category: 'Clothing',
    image: categoryImg(),
    relatives: [
      {
        title: 'T-Shirts',
        image: categoryImg(),
      },
      {
        title: 'Pants',
        image: categoryImg(),
      },
      {
        title: 'Dresses',
        image: categoryImg(),
      },
      {
        title: 'Jackets',
        image: categoryImg(),
      },
      {
        title: 'Skirts',
        image: categoryImg(),
      },
      {
        title: 'Shorts',
        image: categoryImg(),
      },
      {
        title: 'Sweaters',
        image: categoryImg(),
      },
      {
        title: 'Blouses',
        image: categoryImg(),
      }
    ],
  },
  {
    category: 'Shoes',
    image: categoryImg(),
    relatives: [
      {
        title: 'Sneakers',
        image: categoryImg(),
      },
      {
        title: 'Boots',
        image: categoryImg(),
      },
      {
        title: 'Sandals',
        image: categoryImg(),
      },
      {
        title: 'Loafers',
        image: categoryImg(),
      },
      {
        title: 'Heels',
        image: categoryImg(),
      },
      {
        title: 'Flats',
        image: categoryImg(),
      }
    ],
  },
  {
    category: 'Bags',
    image: categoryImg(),
    relatives: [
      {
        title: 'Handbags',
        image: categoryImg(),
      },
      {
        title: 'Backpacks',
        image: categoryImg(),
      },
      {
        title: 'Clutches',
        image: categoryImg(),
      },
      {
        title: 'Totes',
        image: categoryImg(),
      },
      {
        title: 'Crossbody Bags',
        image: categoryImg(),
      }
    ],
  },
  {
    category: 'Lingerie',
    image: categoryImg(),
    relatives: [
      {
        title: 'Bras',
        image: categoryImg(),
      },
      {
        title: 'Panties',
        image: categoryImg(),
      },
      {
        title: 'Loungewear',
        image: categoryImg(),
      },
      {
        title: 'Sleepwear',
        image: categoryImg(),
      }
    ],
  },
  {
    category: 'Watch',
    image: categoryImg(),
    relatives: [
      {
        title: 'Smart Watches',
        image: categoryImg(),
      },
      {
        title: 'Analog Watches',
        image: categoryImg(),
      },
      {
        title: 'Digital Watches',
        image: categoryImg(),
      }
    ],
  },
  {
    category: 'Hoodies',
    image: categoryImg(),
    relatives: [
      {
        title: 'Pullover Hoodies',
        image: categoryImg(),
      },
      {
        title: 'Zip-Up Hoodies',
        image: categoryImg(),
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
      image: smallProductImg(),
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