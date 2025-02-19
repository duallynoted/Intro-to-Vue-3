const app = Vue.createApp({
  data() {
    return {
      activeClass: true,
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'Knee high, warm, colorful foot skin casings.',
      selectedVariant: 0,
      bombasUrl: 'https://www.bombas.com',
      // inStock: true,
      // inventory: 100,
      hasDesiredColorInStock: false,
      onSale: getSaleDate(),
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 2234,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 50,
        },
        {
          id: 2235,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0,
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
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    saleStatus() {
      return `${this.brand} ${this.product} are on sale`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
  },
});

const getSaleDate = () => {
  const baseDate = new Date();
  const dayOfMonth = baseDate.getDate();
  console.log('base date: ', baseDate.getDate());
  return dayOfMonth;
};
