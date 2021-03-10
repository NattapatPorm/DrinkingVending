<template>
  <b-container>
    <b-row>
      <b-col cols="6" md="4" v-for="product in ProductLists" :key="product.id">
        <ProductCard :Product=product />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import mainProductHttpService from "@/services/httpServices/mainProductHttpService";
import ProductCard from "~/components/MachineApp/ProductCard";

export default {

  name: "MachineApp",

  components: { ProductCard },

  data() {
    return {
      ProductLists: [],
    }
  },
  async created() {
    await this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const { data } = await mainProductHttpService.getMainProducts();
        this.ProductLists = data.result;
      } catch (err) {
        throw err;
      }
    }
  }
}
</script>
