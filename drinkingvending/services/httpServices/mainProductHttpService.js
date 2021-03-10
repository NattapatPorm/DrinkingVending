import { apiServices } from './axiosConfig';

export default {

  getMainProducts() {
    return apiServices.get("/mainProducts/all");
  },
}
