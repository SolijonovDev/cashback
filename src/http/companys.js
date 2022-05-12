import { $api } from "./index.js";


class Api{
    async getCompanies(){
        const res=await $api.get("companies")
        return res;
    }
    async getOneCompany(id){
        const res=await $api.get(`companies/61/products`)
        return res;
    }
}


export default new Api();
