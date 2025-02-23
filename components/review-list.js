app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  methods: {
    processRecommendation(recommendation, user) {
      if (recommendation === 'Yes') {
        return `Yes, ${user} would recommend this product.`;
      } else {
        return `This product is not ${user}'s favorite.`;
      }
    },
  },
  template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
    <li v-for="(review, index) in reviews" :key="index">
    {{ review.name }} gave this item {{ review.rating }} stars:
    <br/>
    <br/>
    "{{review.review}}"
    <br/>
    <br/>
    {{ processRecommendation(review.recommend, review.name)}}
    </li>
    </ul>
    </div>
    `,
});
