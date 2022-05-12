
import  axios  from 'axios';
import { url } from './index';

const $api = axios.create({
    headers: {
      "Content-Type": "application/json"
    },
    baseURL: url,
  });

class Api{
    async getCompanies(){
        const res=await $api.get("companies",{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        })
        return res;
    }

    async getOneCompany(id){
        const res=await $api.get(`companies/${id}/products`,{
            Authorization: `Bearer ${localStorage.getItem("token")}`
        })
        return res;
    }
}


export default new Api();
