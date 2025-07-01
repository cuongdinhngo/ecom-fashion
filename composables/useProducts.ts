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
    subCategories: [
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
    subCategories: [
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
    subCategories: [
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
    subCategories: [
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
    subCategories: [
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
    subCategories: [
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

const SIZE_OPTIONS = {
  0: 'XS', 1: 'S', 2: 'M', 3: 'L', 4: 'XL', 5: 'XXL'
};

export const useProducts = (options: ProductOptions = defaultOptions) => {
  const products = Array.from({ length: options.quantity }, (_, index) => {
    const discount = faker.helpers.arrayElement([10, 20, 30, 40, 50]);
    const originalPrice = faker.commerce.price({ min: 10, max: 100, dec: 2 });
    const price = (parseFloat(originalPrice) * (1 - discount / 100)).toFixed(2);
    const category = faker.helpers.arrayElement(CATEGORIES).title;
    const subCategories = KINDS.find(item => item.category === category)?.subCategories || [];
    const id = index + 1;
    return {
      id: id,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      category: category,
      relative: subCategories.length > 0 ? faker.helpers.arrayElement(subCategories).title : '',
      image: smallProductImg(),
      originalPrice: `$${originalPrice}`,
      price: `$${price}`,
      discount,
      likeCount: faker.number.int({ min: 0, max: 10000 }),
      status: faker.helpers.arrayElement(['New', 'Popular', 'Sale', 'Limited']),
      to: { name: 'product-id', params: { id: id } }
    };
  });

  const searchProducts = (searchTerms: string[]): Product[] => {
    // Filter products by matching category
    return products.filter(product => searchTerms.includes(product.category));
  }

  const searchSubCategories = (searchTerms: string[]): Object[] => {
    // Return subCategories' titles for the given categories
    const category = KINDS.filter(kind => searchTerms.includes(kind.category));
    if (category.length === 0) {
      return [];
    } else {
      return category.flatMap(kind => kind.subCategories);
    }
  }

  return {
    products,
    SEARCH_TERMS,
    CATEGORIES,
    KINDS,
    SIZE_OPTIONS,
    searchProducts,
    searchSubCategories
  };
}