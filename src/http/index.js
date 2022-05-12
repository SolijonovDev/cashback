import axios from "axios";

const url = "https://api.uracashback.uz/";

export let $host = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: url,
});

export let $api = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
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
    localStorage.setItem("token", res.data.token);
    return res;
  }
}

export default new AuthApi()
