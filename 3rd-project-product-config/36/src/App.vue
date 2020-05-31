<template>
  <div id="app">
    <Product :product="product" />
  </div>
</template>

<script>
import Product from "./components/Product";

export default {
  name: "App",
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  components: {
    Product,
  },
  created() {
    this.$http
      .get("http://localhost:3000/product")
      .then(({ data }) => (this.$store.state.product = data));
  },
};
</script>
