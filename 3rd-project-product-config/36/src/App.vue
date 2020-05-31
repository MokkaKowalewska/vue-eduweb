<template>
  <div id="app">
    <Product />
  </div>
</template>

<script>
import Product from "./components/Product";

export default {
  name: "App",
  computed: {},
  components: {
    Product,
  },
  created() {
    this.$http.get("http://localhost:8080/product")
        .then({ data } => this.$store.state.product = data);
  },
};
</script>
