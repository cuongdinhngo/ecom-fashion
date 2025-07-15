import { faker } from '@faker-js/faker';

export interface Product {
  id: number|string;
  name: string;
  description: string;
  shortDescription: string;
  category: string;
  relative: string;
  image: string;
  originalPrice: string;
  price: string;
  discount: number;
  likeCount: number;
  status: string;
  to: { name: string; params: { id: number } };
  quantity?: number;
  size?: string;
  color?: string;
}

export interface SearchFilters {
  categories: string[];
  subCategories?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  size?: string;
  color?: string;
  quickSearch?: string;
}

const defaultOptions = {
  quantity: 300
};

type ProductOptions = {
  quantity: number;
};

export const CATEGORIES = [
  {
    title: 'Clothing',
    image: imagePath('c-6.jpg'),
  },
  { title: 'Shoes',
    image: imagePath('c-4.jpg'),
  },
  {
    title: 'Bags',
    image: imagePath('c-11.jpg'),
  },
  {
    title: 'Lingerie',
    image: imagePath('c-5.jpg'),
  },
  {
    title: 'Watch',
    image: imagePath('c-14.jpg'),
  },
  {
    title: 'Hoodies',
    image: imagePath('c-20.jpg'),
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

const COLORS = [
  { color: 'grey' },
  { color: 'red' },
  { color: 'blue' },
  { color: 'green' },
  { color: 'yellow' },
  { color: 'purple' },
  { color: 'orange' },
  { color: 'pink' }
];

export const useProducts = (options: ProductOptions = defaultOptions) => {
  const products = Array.from({ length: options.quantity }, (_, index) => {
    const discount = faker.helpers.arrayElement([10, 20, 30, 40, 50]);
    const originalPrice = faker.commerce.price({ min: 10, max: 100, dec: 2 });
    const price = (parseFloat(originalPrice) * (1 - discount / 100)).toFixed(2);
    const category = faker.helpers.arrayElement(CATEGORIES).title;
    const subCategories = KINDS.find(item => item.category === category)?.subCategories || [];
    const id = index + 1;
    const description = faker.commerce.productDescription();
    return {
      id: id,
      name: faker.commerce.productName(),
      description: description,
      shortDescription: description.length > 50
        ? description.slice(0, description.slice(0, 50).lastIndexOf(' ')) + ' ...'
        : description,
      category: category,
      relative: subCategories.length > 0 ? faker.helpers.arrayElement(subCategories).title : '',
      image: smallProductImg(),
      size: faker.helpers.arrayElement(Object.values(SIZE_OPTIONS)),
      color: faker.helpers.arrayElement(COLORS).color,
      originalPrice: `$${originalPrice}`,
      price: price,
      discount,
      likeCount: faker.number.int({ min: 0, max: 10000 }),
      status: faker.helpers.arrayElement(['New', 'Popular', 'Sale', 'Limited']),
      to: { name: 'product-id', params: { id: id } }
    };
  });

  const searchProducts = (searchTerms: SearchFilters): Product[] => {
    console.log('SEARCH TERMS =>>> ', searchTerms);

    // If no filters are provided, return all products
    if (!searchTerms || typeof searchTerms !== 'object') {
      return products;
    }

    let filteredProducts = products;

    // Filter by CATEGORIES
    if (searchTerms.categories && Array.isArray(searchTerms.categories) && searchTerms.categories.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        searchTerms.categories.includes(product.category)
      );
    }

    // Filter by SUB-CATEGORIES
    if (searchTerms.subCategories && Array.isArray(searchTerms.subCategories) && searchTerms.subCategories.length > 0) {
      filteredProducts = filteredProducts.filter(product => 
        searchTerms.subCategories.includes(product.relative)
      );
    }
    
    // Filter by PRICE RANGE
    if (searchTerms.priceRange && typeof searchTerms.priceRange === 'object') {
      const { min, max } = searchTerms.priceRange;
      
      if (typeof min === 'number' || typeof max === 'number') {
        filteredProducts = filteredProducts.filter(product => {
          const productPrice = parseFloat(product.price.replace('$', ''));
          
          if (typeof min === 'number' && productPrice < min) {
            return false;
          }
          
          if (typeof max === 'number' && productPrice > max) {
            return false;
          }
          
          return true;
        });
      }
    }

    // Filter by SIZE 
    if (searchTerms.size && typeof searchTerms.size === 'string') {
      filteredProducts = filteredProducts.filter(product => {
        const isIndex = /^\d+$/.test(searchTerms.size!);
        
        if (isIndex) {
          const sizeIndex = parseInt(searchTerms.size!);
          const sizeName = SIZE_OPTIONS[sizeIndex as keyof typeof SIZE_OPTIONS];
          return product.size === sizeName;
        } else {
          return product.size === searchTerms.size;
        }
      });
    }

    // Filter by color
    if (searchTerms.color && typeof searchTerms.color === 'string') {
      filteredProducts = filteredProducts.filter(product => 
        product.color === searchTerms.color
      );
    }

    // Filter by quick search => popular, sale, price_low, price_high
    if (searchTerms.quickSearch && typeof searchTerms.quickSearch === 'string') {
      switch (searchTerms.quickSearch) {
        // Sort by likeCount (descending - most liked first)
        case 'popular':
          filteredProducts = filteredProducts.sort((a, b) => b.likeCount - a.likeCount);
          break;

        // Filter by products with 'New' status
        case 'new':
          filteredProducts = filteredProducts.filter(product => product.status === 'New');
          break;

        // Filter by products with 'Sale' status
        case 'sale':
          filteredProducts = filteredProducts.filter(product => product.status === 'Sale');
          break;

        // Sort by price (ascending - lowest price first)
        case 'price_low':
          filteredProducts = filteredProducts.sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', ''));
            const priceB = parseFloat(b.price.replace('$', ''));
            return priceA - priceB;
          });
          break;

        // Sort by price (descending - highest price first)
        case 'price_high':
          filteredProducts = filteredProducts.sort((a, b) => {
            const priceA = parseFloat(a.price.replace('$', ''));
            const priceB = parseFloat(b.price.replace('$', ''));
            return priceB - priceA;
          });
          break;
      }
    }

    return filteredProducts;
  }

  const searchSubCategories = (searchTerms: string[]): Object[] => {

    if (!Array.isArray(searchTerms) || searchTerms.length === 0) {
      return [];
    }
    const category = KINDS.filter(kind => searchTerms.includes(kind.category));
    if (category.length === 0) {
      return [];
    } else {
      return category.flatMap(kind => kind.subCategories);
    }
  }

  const remapSubCategories = (searchQuery: SearchFilters): any => {
    if (!searchQuery.categories || !Array.isArray(searchQuery.categories) || searchQuery.categories.length === 0) {
      return [];
    }
    
    if (searchQuery.subCategories && Array.isArray(searchQuery.subCategories) && searchQuery.subCategories.length === 0) {
      return [];
    }
    
    const filteredKinds = KINDS.filter(kind => 
      searchQuery.categories.includes(kind.category)
    );
    
    const validSubCategories = filteredKinds.flatMap(kind => kind.subCategories);
    
    if (searchQuery.subCategories && Array.isArray(searchQuery.subCategories) && searchQuery.subCategories.length > 0) {
      return validSubCategories
        .filter(subCategory => searchQuery.subCategories!.includes(subCategory.title))
        .map(subCategory => subCategory.title);
    }
    
    return validSubCategories.map(sub => sub.title);
  }

  return {
    products,
    SEARCH_TERMS,
    CATEGORIES,
    KINDS,
    SIZE_OPTIONS,
    COLORS,
    searchProducts,
    searchSubCategories,
    remapSubCategories
  };
}