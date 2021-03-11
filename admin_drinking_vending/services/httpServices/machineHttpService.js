import { apiServices } from './axiosConfig';

export default {

  getMachines() {
    return apiServices.get("/machines");
  },
}
