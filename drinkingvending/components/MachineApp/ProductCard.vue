<template>
  <div>
    <b-card
      :title="product.mainproduct_id.mainproduct_name"
      :img-src="product.mainproduct_id.mainproduct_image"
      img-height="200"
      img-width="200"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="m-3"
    >
      <div>
        Product total quantity : {{ product.product_quantity }}
      </div>
      <div>
        <label>Product quantity</label>
        <b-form-spinbutton
          id="sb-inline"
          v-model="value"
          inline
          min="0"
        ></b-form-spinbutton>
        <b-button variant="primary" @click="buyProduct">Buy</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
import productHttpService from "~/services/httpServices/productHttpService";

export default {

  props: {
    Product: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      product: {},
      value: 0
    }
  },

  created() {
    this.product = this.Product;
  },

  methods: {

    async buyProduct() {
        try {
          const { data } = await productHttpService.buyProduct(this.product.product_id, this.value);
          if (data.success) {
            this.makeToast('success');
          }
        } catch (e) {
          this.makeToast('danger');
          throw e;
        }
    },

    makeToast(variant = null) {
      const message = variant==='success'? 'success': 'failed'
      this.$bvToast.toast(`Order has been paid ${this.product.mainproduct_id.mainproduct_name} ${message}`, {
        title: 'Order status message',
        variant: variant,
        solid: true
      })
    },
  }
}
</script>
