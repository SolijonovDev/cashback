import axios from "axios";

const url="https://api.uracashback.uz/"

let $api= axios.create({
    headers: {
        "Content-Type":"application/json"
    },
    baseURL:url
  })


  let instanse=axios.create({
      headers:{
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      },
      baseURL:url
  })
  


export  async function  sendVerification(phone){
    const res=await $api.post("security/send-verification",{
        "phoneNumber":`${phone}`
    })
    return res;
}


export  async function  verifyLogin(phone,code){
    const res=await $api.post("security/verify-login",{
        "phoneNumber":`${phone}`,
        code
    }
    )
    localStorage.setItem('token',res.data.token)

    return res;
}


export async function getCompanies(){
    const res=await instanse.get("companies")
    console.log(res);
    if(res.status===200){
        return res.data;
    }
    alert("Error")
}

