const app = Vue.createApp({
  data() {
    return {
      activeClass: true,
      cart: 0,
      product: 'Socks',
      description: 'Knee high, warm, colorful foot skin casings.',
      image: './assets/images/socks_blue.jpg',
      bombasUrl: 'https://www.bombas.com',
      inStock: false,
      // inventory: 100,
      hasDesiredColorInStock: false,
      onSale: getSaleDate(),
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
        },
      ],
      sizes: [
        { id: 45559, size: 'Small', colors: ['green', ''] },
        { id: 45565, size: 'Medium', colors: ['green', 'blue'] },
        { id: 45571, size: 'Large', colors: ['', 'blue'] },
        { id: 45585, size: 'Jumbo', colors: ['green', 'blue'] },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      console.log('cart: ', this.cart);
      this.cart > 0 ? (this.cart -= 1) : null;
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});

const getSaleDate = () => {
  const baseDate = new Date();
  const dayOfMonth = baseDate.getDate();
  console.log('base date: ', baseDate.getDate());
  return dayOfMonth;
};
