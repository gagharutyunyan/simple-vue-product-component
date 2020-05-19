const app = new Vue({
  el: "#app",
  data: {
    title: "Product",
    description: "My best product",
    img: ["/img/first-sock.jpg", "/img/second-sock.jpg"],
    inventory: 2,
    details: ["100% cotton", "for kids"],
    variants: [
      { id: 1, variantColor: "red" },
      { id: 2, variantColor: "green" },
    ],
  },
});
