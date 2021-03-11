import { apiServices } from './axiosConfig';

export default {

  getProducts(id) {
    return apiServices.get(`/products/machine/${id}`);
  },

  buyProduct(productId, productNumber) {
    return apiServices.put('/products/buyProduct', {
      productId: productId,
      productNumber: productNumber,
    })
  },

  checkProductQuantity() {
    return apiServices.get('/products/findByQuantiy');
  },
}
