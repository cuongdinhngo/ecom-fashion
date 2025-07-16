type SearchQuery = {
  categories: string[];
  subCategories: string[];
  size: number;
  color: string;
  price: [number, number];
  quickSearch: string;
  gender: string;
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
    gender: 'all',
  })
);

export function resetSearchQuery() {
  const searchQuery = useSearchQuery();
  searchQuery.value = {
    categories: [],
    subCategories: [],
    size: 0,
    color: '',
    price: [1, 100],
    quickSearch: '',
    gender: 'all',
  };
}