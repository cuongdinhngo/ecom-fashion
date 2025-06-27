import { de, faker } from '@faker-js/faker';

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

const categories = ['Clothing', 'Shoes', 'Bags', 'Lingerie', 'Watch', 'Hoodies'];
const kind = [
  {
    category: 'Clothing',
    relatives: ['T-Shirts', 'Pants', 'Dresses', 'Jackets', 'Skirts', 'Shorts', 'Sweaters', 'Blouses'],
  },
  {
    category: 'Shoes',
    relatives: ['Sneakers', 'Boots', 'Sandals', 'Loafers', 'Heels', 'Flats'],
  },
  {
    category: 'Bags',
    relatives: ['Handbags', 'Backpacks', 'Clutches', 'Totes', 'Crossbody Bags'],
  },
  {
    category: 'Lingerie',
    relatives: ['Bras', 'Panties', 'Loungewear', 'Sleepwear'],
  },
  {
    category: 'Watch',
    relatives: ['Smartwatches', 'Analog Watches', 'Digital Watches'],
  },
  {
    category: 'Hoodies',
    relatives: ['Pullover Hoodies', 'Zip-Up Hoodies'],
  },
];

export const useProducts = (options: ProductOptions = defaultOptions) => {
  const products = Array.from({ length: options.quantity }, () => {
    const discount = faker.helpers.arrayElement([10, 20, 30, 40, 50]);
    const originalPrice = faker.commerce.price({ min: 10, max: 100, dec: 2 });
    const price = (parseFloat(originalPrice) * (1 - discount / 100)).toFixed(2);
    const category = faker.helpers.arrayElement(categories);
    const relative = kind.find(item => item.category === category)?.relatives || [];
    return {
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      category: category,
      relative: relative,
      image: `https://picsum.photos/${options.photoWidth}/${options.photoHeight}?random=` + faker.number.int({ min: 1, max: 1000 }),
      originalPrice,
      price,
      discount,
    };
  });

  return {
    products
  };
}