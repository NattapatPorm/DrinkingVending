<template>
  <div>
    <b-navbar type="light" variant="light">
      <b-navbar-brand href="#">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/2738/2738730.svg?token=exp=1615352675~hmac=9db2c266656270b6d87f3350d4591e5d"
          class="d-inline-block align-top image"
          alt="drinkin-logo"
        >
        Admin system
      </b-navbar-brand>
      <b-button variant="primary">
        Notifications <b-badge variant="light">{{ alertNotificationCounter }}</b-badge>
      </b-button>
      <b-dropdown
        size="lg"
        variant="link"
        toggle-class="text-decoration-none"
        no-caret
      >
        <template #button-content>
          &#x1f50d;<span class="sr-only">Search</span>
        </template>
        <b-dropdown-item href="#" v-for="item in alertQuantityList" :key="item.id">
          <img
            src="https://www.flaticon.com/svg/vstatic/svg/1827/1827370.svg?token=exp=1615463004~hmac=c97e189c0ad02818e940f66f16908176"
            width="30"
            height="30"
          />
          <br />
          product name : {{ item.name }}
          <br />
          location: {{ item.location }}
          <br />
          quantity: {{ item.quantity }}
          <hr />
        </b-dropdown-item>
      </b-dropdown>
    </b-navbar>
  </div>
</template>

<script>
import productHttpService from "@/services/httpServices/productHttpService";

export default {

  async created() {
    await this.checkProductQuantity();
  },

  mounted() {
    setInterval(async () => {
      await this.checkProductQuantity();
    }, 5000);
  },

  data() {
    return {
      alertNotificationCounter: 0,
      alertQuantityList: [],
    }
  },

  methods: {
    async checkProductQuantity() {

      console.log('fetch');
      this.alertQuantityList = [];
      try {
        const { data } = await productHttpService.checkProductQuantity();
        this.alertNotificationCounter = data.result.length;
        data.result.map(item => {
          const product = {};
          product.id = item.product_id;
          product.name = item.mainproduct_id.mainproduct_name;
          product.image = item.mainproduct_id.mainproduct_image;
          product.quantity = item.product_quantity;
          product.location = item.machine.machine_location_id.location_name;
          this.alertQuantityList = [...this.alertQuantityList, product];
        })
      } catch (e) {
        throw e;
      }
    }
  }
}
</script>

<style>
  .image {
    width: 30px;
    height: 30px;
  }
</style>
