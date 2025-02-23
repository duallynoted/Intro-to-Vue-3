app.component('product-details', {
  props: {
    details: {
      type: array,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="product-details">
    <h2>Product Details Go Here</h2>
    </div>`,
});
