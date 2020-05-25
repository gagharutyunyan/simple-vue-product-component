Vue.component("product", {
  props: {
    cost: {
      type: String,
      required: true,
    },
  },
  template: `
  <div class="product">
        <div class="product_image product_container">
          <img :src="image" alt="" />
        </div>
        <div class="product_info product_container">
          <h1>{{title}}</h1>
          <p>{{description}}</p>
          <ul>
            <li v-for="detail in details">{{detail}}</li>
          </ul>
          <div class="available">
            <p v-if="inventory > 1">we have {{inventory}} socks</p>
            <p v-else-if="inventory === 1">we have 1 socks</p>
            <p v-else>we do not have socks</p>
            <p >{{cost}}</p>
          </div>
          <div class="hover">
            <div
              class="hovered_block"
              v-for="(variant,index) in variants"
              :key="variant.id"
              :style="{backgroundColor: variant.variantColor}"
              @mouseover="updateProduct(index)"
            ></div>
          </div>
          <div class="order">
          <button @click="addToCart" :disabled="isDisabled('add')">
          add
        </button>
            <button @click="delToCart" :disabled="isDisabled('delete')">
              Del
            </button>
          </div>
        </div>
      </div>
  `,
  data() {
    return {
      title: "Product",
      description: "My best product",
      selectedItem: 0,
      details: ["100% cotton", "for kids"],
      variants: [
        {
          id: 1,
          variantColor: "red",
          img: "/img/first-sock.jpg",
          quantity: 10,
        },
        {
          id: 2,
          variantColor: "green",
          img: "/img/second-sock.jpg",
          quantity: 5,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart");
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

const app = new Vue({
  el: "#app",
  data: {
    cost: "hi",
    cart: 0,
  },
  methods: {
    updateCart() {
      this.cart += 1;
      console.log("object");
    },
  },
});
