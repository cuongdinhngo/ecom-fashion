export const useWishlist = () => {
  const wishlist = ref<(number | string)[]>([]);

  const getWishlist = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      wishlist.value = JSON.parse(storedWishlist);
    } else {
      wishlist.value = [];
    }
  }

  // Initialize wishlist on composable creation
  getWishlist();

  const addToWishlist = (productId: number | string) => {
    getWishlist();
    if (!wishlist.value.includes(productId)) {
      wishlist.value.push(productId);
      localStorage.setItem('wishlist', JSON.stringify(wishlist.value));
    }
  };

  const removeFromWishlist = (productId: number | string) => {
    wishlist.value = wishlist.value.filter(item => item !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist.value));
  };

  const isInWishlist = (productId: number | string) => {
    return wishlist.value.includes(productId);
  }

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  };
}