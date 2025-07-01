export interface CartItem {
  productId: number | string;
  color?: string;
  size?: string;
  quantity?: number;
}

export const useCart = () => {
  const cartItems = useCartItems();

  const getCartItems = () => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      cartItems.value = JSON.parse(storedCartItems);
    } else {
      cartItems.value = [];
    }
  }

  // Initialize cart items on composable creation
  getCartItems();

  const addToCart = ( cartItem: CartItem) => {



    const existingItemIndex = cartItems.value.findIndex(item => 
      item.productId === cartItem.productId
    );

    if (existingItemIndex !== -1) {
      cartItems.value[existingItemIndex].quantity = cartItem.quantity;
      cartItems.value[existingItemIndex].size = cartItem.size;
      cartItems.value[existingItemIndex].color = cartItem.color;
    } else {
      cartItems.value.push(cartItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
  };

  const removeFromCart = (item: number | string) => {
    cartItems.value = cartItems.value.filter(i => i.productId !== item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems.value));
  };

  const isInCart = (item: number | string) => {
    return cartItems.value.some(i => i.productId === item);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    isInCart,
  };
}