app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- using v-bind to bind property with expression, like {{}} -->
        <img v-bind:src="image" :class="{'out-of-stock-img': !inStock}" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <!-- Was supposed to create a bool for a computed property, but again, the method with a
        date is just more fun as it builds the bool in there for ya idk  -->
        <h2 v-show="onSale >=17 && onSale < 28">{{ saleStatus }}</h2>
        <p>{{ description }}</p>
        <!-- <p v-show="onSale >=24 && onSale < 30">
          On Sale. Get it while you still can!
        </p> -->
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div>
          <h3>Colors</h3>
          <!--
            These
            class="color-circle"
            :class="{ active: activeClass}"
            get combined like this when it renders:
            class="color-circle active"
            can use inline ternary operaters, which is a helpful tool class binding gives:
            :class="[isActive ? activeClass: '']" //uses array syntax
           -->
          <div
            class="color-circle"
            :class="{ active: activeClass}"
            v-for="(variant, index) in variants"
            :key="variant.id"
            :style="{ backgroundColor: variant.color }"
            @mouseover="updateVariant(index)"
          >
            <!-- {{ variant.color }} -->
          </div>
          <h3>Size Options</h3>
          <div v-for="size in sizes" :key="size.id">
            {{size.size}} {{size.colors[0] === 'green'? 'in green and': ''}}
            {{size.colors[1] === 'blue' ? 'blue' : ''}}
          </div>
        </div>
        <p v-show="onSale >= 30">Sale has ended.</p>
        <!-- this adds and removes element from the dom (in data, this is bool true/false) -->
        <p v-if="inStock">In Stock</p>
        <!-- <p v-if="inventory > 10">In Stock</p> -->
        <!-- using v-else for out of stock, but not really necessary -->
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <!-- v-show is more perfomant; rather than adding and removing from
        the DOM, it toggles the elements' visibility  -->
        <p v-show="hasDesiredColorInStock">Color In Stock</p>
        <!-- v-on is the event listener; its shorthand is @, so ex: @click  -->
        <!-- <button
          class="button"
          :class="{ disabledButton: !instock }"
          :disabled="!inStock"
          @click="addToCart"
        >
          Add to Cart
        </button> -->
        <button class="button" @click="addToCart">Add to Cart</button>
        <button class="decrement-button" @click="removeFromCart">
          Remove from Cart
        </button>
        <br />
        <!-- Using shorthand of just the colon :href instead of v-bind:href -->
      <!--  <a :href="bombasUrl">Get other foot casings</a> -->
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
      activeClass: true,
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
      reviews: [],
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
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
    addReview(review) {
      this.reviews.push(review);
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
    shipping() {
      if (this.premium) {
        return 'Free';
      } else {
        return '$2.99';
      }
    },
  },
});

const getSaleDate = () => {
  const baseDate = new Date();
  const dayOfMonth = baseDate.getDate();
  console.log('base date: ', baseDate.getDate());
  return dayOfMonth;
};
