<template>
  <b-container>
    <b-row v-if="pageState === 0" >
      <b-col cols="6" md="4" >
        <b-form-select
          v-model="selectedMachine"
          :options="MachineList"
          class="m-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-select>
      </b-col>
      <b-col cols="6" md="4">
        <b-button variant="primary" class="m-3" @click="selectedLocation">Select location</b-button>
      </b-col>
    </b-row>
    <b-row v-if="pageState === 1">
      <b-col cols="6" md="4" v-for="product in ProductLists" :key="product.id">
        <ProductCard :Product=product />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import productHttpService from "~/services/httpServices/productHttpService";
import machineHttpService from "~/services/httpServices/machineHttpService";
import ProductCard from "~/components/MachineApp/ProductCard";

export default {

  name: "MachineApp",

  components: { ProductCard },

  data() {
    return {
      ProductLists: [],
      pageState: 0,
      MachineList: [],
      selectedMachine: "1",
    }
  },

  async created() {
    await this.loadData();
  },

  methods: {

    async loadData() {
      try {
        const { data } = await machineHttpService.getMachines();
        data.result.map(item => {
          const machine = {};
          machine.item = item.machine_id;
          machine.name = item.machine_location_id.location_name;
          this.MachineList = [...this.MachineList, machine];
        })
      } catch (e) {
        throw e;
      }
    },

    async selectedLocation() {
      try {
        const { data } = await productHttpService.getProducts(this.selectedMachine);
        this.ProductLists = data.result;
        this.pageState = 1;
      } catch (e) {
        throw e;
      }
    },

  }
}
</script>
