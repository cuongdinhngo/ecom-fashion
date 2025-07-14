type SearchQuery = {
  categories: string[];
  subCategories: string[];
  size: number;
  color: string;
  price: [number, number];
  quickSearch: string;
};

export const useSearchQuery = () => useState<SearchQuery>(
  'searchQuery',
  () => ({
    categories: [],
    subCategories: [],
    size: 0,
    color: '',
    price: [1, 100],
    quickSearch: '',
  })
);