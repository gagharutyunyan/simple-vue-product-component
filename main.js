const app = new Vue({
  el: "#app",
  data: {
    title: "Product",
    description: "My best product",
    selectedItem: 0,
    details: ["100% cotton", "for kids"],
    variants: [
      { id: 1, variantColor: "red", img: "/img/first-sock.jpg", quantity: 10 },
      {
        id: 2,
        variantColor: "green",
        img: "/img/second-sock.jpg",
        quantity: 5,
      },
    ],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    delToCart() {
      this.cart -= 1;
    },
    isDisabled(variant) {
      switch (variant) {
        case "add":
          return this.cart >= this.variants[this.selectedItem].quantity
            ? true
            : false;
        case "delete":
          return this.cart <= 0 ? true : false;
        default:
          return false;
      }
    },
    updateProduct(item) {
      this.selectedItem = item;
      this.cart = 0;
    },
  },
  computed: {
    image() {
      return this.variants[this.selectedItem].img;
    },
    inventory() {
      const count = this.variants.reduce((acc, curr) => {
        return acc.quantity + curr.quantity;
      });
      return count;
    },
  },
});
