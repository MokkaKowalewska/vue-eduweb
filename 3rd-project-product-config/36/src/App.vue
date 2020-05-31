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
      product() => (
          this.$store.state.product;
      )
  },
  components: {
    Product,
  },
  created() {
    this.$http.get("http://localhost:8080/product")
        .then({ data } => this.$store.state.product = data);
  },
};
</script>
