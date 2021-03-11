<template>
  <b-row>
    <b-col cols="6" md="4" class="m-4">
      <b-card
        border-variant="warning"
        header="Machine Location"
        header-bg-variant="warning"
        align="center"
        header-text-variant="white"
      >
        <b-table striped hover :items="MachineList"></b-table>
      </b-card>
    </b-col>
    <b-col cols="6" md="4" class="m-4">
      <b-card
        border-variant="warning"
        header="Product"
        header-bg-variant="warning"
        align="center"
        header-text-variant="white"
      >
        <b-tabs content-class="mt-3">
          <b-tab title="First" active>
            <div>
              <b-table striped hover :items="MachineList"></b-table>
            </div>
          </b-tab>
          <b-tab title="Second">
            <div>
              <b-table striped hover :items="MachineList"></b-table>
            </div>
          </b-tab>
          <b-tab title="Disabled">
            <div>
              <b-table striped hover :items="MachineList"></b-table>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>

import machineHttpService from "../../drinkingvending/services/httpServices/machineHttpService";

export default {

  async created() {
    await this.loadData();
  },

  data() {
    return {
      MachineList: []
    }
  },

  methods: {
    async loadData() {
      try {
        const { data } = await machineHttpService.getMachines();
        data.result.map(item => {
          const machine = {};
          machine.item = item.machine_id;
          machine.name = item.machine_location_id.location_name;
          machine.lng = item.machine_location_id.location_lng;
          machine.lat = item.machine_location_id.location_lat;
          this.MachineList = [...this.MachineList, machine];
        })
      } catch (e) {
        throw e;
      }
    },
  }
}
</script>

<style>

</style>
