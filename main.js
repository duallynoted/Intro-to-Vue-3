const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'Knee high, warm, colorful foot skin casings.',
      image: './assets/images/socks_green.jpg',
      bombasUrl: 'https://www.bombas.com',
      inventory: 0,
      hasDesiredColorInStock: false,
      onSale: getSaleDate(),
    };
  },
});

const getSaleDate = () => {
  const baseDate = new Date();
  const dayOfMonth = baseDate.getDate();
  console.log('base date: ', baseDate.getDate());
  return dayOfMonth;
};
