const app = new Vue({
  el: "#app",
  data: {
    title: "Product",
    description: "My best product",
    inventory: 2,
    image: "/img/first-sock.jpg",
    details: ["100% cotton", "for kids"],
    variants: [
      { id: 1, variantColor: "red", img: "/img/first-sock.jpg" },
      { id: 2, variantColor: "green", img: "/img/second-sock.jpg" },
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
      console.log(variant);
      switch (variant) {
        case "add":
          return this.cart >= this.inventory ? true : false;
        case "delete":
          return this.cart <= 0 ? true : false;
        default:
          return false;
      }
    },
    updateProductImg(img) {
      if (img === this.image) return;
      this.image = img;
    },
  },
});
