import axios from "axios";

export const url = "https://api.uracashback.uz/";

export let $host = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: url,
});



class AuthApi {

  async sendVerification(phone) {
    const res = await $host.post("security/send-verification", {
      phoneNumber: `${phone}`,
    });
    return res;
  }

  async verifyLogin(phone, code) {
    const res = await $host.post("security/verify-login", {
      phoneNumber: `${phone}`,
      code,
    });
    return res;
  }

}

export default new AuthApi()
