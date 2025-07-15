import { useWishlistItems } from "@/composables/useWishlistItems";

export interface WishlistItem {
  productId: number | string;
  color?: string;
  size?: string;
  quantity?: number;
}

export const useWishlist = () => {
  const wishlistItems = useWishlistItems();

  const getWishlistItems = () => {
    const storedWishlistItems = localStorage.getItem('wishlistItems');
    if (storedWishlistItems) {
      wishlistItems.value = JSON.parse(storedWishlistItems);
    } else {
      wishlistItems.value = [];
    }
  }

  // Initialize wishlist items on composable creation
  getWishlistItems();

  const addToWishlist = (wishlistItem: WishlistItem) => {
    console.log('Adding item to wishlist:', wishlistItem);
    const existingItemIndex = wishlistItems.value.findIndex(item => 
      item.productId === wishlistItem.productId
    );

    if (existingItemIndex !== -1) {
      wishlistItems.value[existingItemIndex].quantity = wishlistItem.quantity;
      wishlistItems.value[existingItemIndex].size = wishlistItem.size;
      wishlistItems.value[existingItemIndex].color = wishlistItem.color;
    } else {
      wishlistItems.value.push(wishlistItem);
    }

    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems.value));
  };

  const removeFromWishlist = (item: number | string) => {
    console.log('Removing item from wishlist:', item);
    wishlistItems.value = wishlistItems.value.filter(i => i.productId !== item);
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems.value));
  };

  const isInWishlist = (item: number | string) => {
    return wishlistItems.value.some(i => i.productId === item);
  };

  return {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };
}