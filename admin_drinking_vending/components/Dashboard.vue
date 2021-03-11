<template>
  <b-container>
    <b-row>
      <b-col cols="12" class="mt-4">
        <b-card
          border-variant="warning"
          header="Machine Location"
          header-bg-variant="warning"
          align="center"
          header-text-variant="white"
        >
          <b-table responsive hover :items="MachineList"></b-table>
        </b-card>
      </b-col>
      <b-col cols="12" class="mt-4">
        <b-card
          border-variant="warning"
          header="Product"
          header-bg-variant="warning"
          align="center"
          header-text-variant="white"
        >
          <b-tabs content-class="mt-3" >
            <b-tab :title="list.name" @click="changeTab(list.id)" v-for="list in MachineList" :key="list.id">
              <div>
                <b-table responsive hover :items="ProductList"></b-table>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

import machineHttpService from "../../drinkingvending/services/httpServices/machineHttpService";
import productHttpService from "../../drinkingvending/services/httpServices/productHttpService";

export default {

  async created() {
    await this.loadMachineData();
    await this.loadProductData();
  },

  data() {
    return {
      MachineList: [],
      ProductList: [],
      selectedMachineTab:1,
      alertItem:[],
    }
  },

  methods: {
    async loadMachineData() {
      try {
        const { data } = await machineHttpService.getMachines();
        data.result.map(item => {
          const machine = {};
          machine.id = item.machine_id;
          machine.name = item.machine_location_id.location_name;
          machine.lng = item.machine_location_id.location_lng;
          machine.lat = item.machine_location_id.location_lat;
          this.MachineList = [...this.MachineList, machine];
        })
      } catch (e) {
        throw e;
      }
    },

    async loadProductData() {
      try {
        const { data } = await productHttpService.getProducts(this.selectedMachineTab);
        data.result.map(item => {
          const product = {};
          product.id = item.product_id;
          product.name = item.mainproduct_id.mainproduct_name;
          product.quantity = item.product_quantity;

          if (item.product_quantity < 10) {
            this.alertItem = {...product};
            this.makeToast('warning');
          }

          this.ProductList = [...this.ProductList, product];
        })
      } catch (e) {
        throw e;
      }
    },

    async changeTab(value) {
      this.selectedMachineTab = value;
      this.ProductList = [];
      await this.loadProductData();
    },

    makeToast(variant = null) {
      this.$bvToast.toast(`Warning product id: ${this.alertItem.id}
      name : ${this.alertItem.name}
      quantity less than 10 `, {
        title: 'Warning quantity status',
        variant: variant,
        solid: true
      })
    },
  }
}
</script>

<style>

</style>
