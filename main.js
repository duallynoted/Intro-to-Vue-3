const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,

    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    updateRemovalFromCart(id) {
      this.cart.length > 0 ? (this.cart.pop(id) -= 1) : null;
    }
  },
});
