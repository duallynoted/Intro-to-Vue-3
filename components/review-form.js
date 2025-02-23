app.component('review-form', {
  template:
    /*html*/
    `<!-- Using .prevent is a modifier that prevents default browser refresh (e.preventDefault()) -->
    <form class="review-form" @submit.prevent="onSubmit">

    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input v-model="name" id="name">

    <label for="review">Review:</label>
    <textarea v-model="review" id="review"></textarea>

    <label for="rating">Rating:</label>
    <!-- Using .number is a modifier that typecasts the value as a number -->
    <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>
    <br/>
    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="recommend">
    <option>Yes</option>
    <option>No</option>
    </select>
    
    <input class="button" type="submit" value="Submit">

    </form>`,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommend: null,
    };
  },
  methods: {
    onSubmit() {
      if (
        this.name === '' ||
        this.review === '' ||
        this.rating === null ||
        this.recommend === null
      ) {
        alert('Please fill in all fields.');
        return;
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      };
      this.$emit('review-submitted', productReview);

      this.name = '';
      this.review = '';
      this.rating = null;
      this.recommend = null;
    },
  },
});
