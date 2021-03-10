<template>
  <div>
    <b-card
      :title="product.mainproduct_name"
      :img-src="product.mainproduct_image"
      img-height="200"
      img-width="200"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <div>
        <label>Product quantity</label>
        <b-form-spinbutton
          id="sb-inline"
          v-model="value"
          inline
          min="0"
        ></b-form-spinbutton>
        <b-button href="#" variant="primary">Buy</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {

  props: {
    Product: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      product: this.Product,
      value: 0
    }
  }
}
</script>
