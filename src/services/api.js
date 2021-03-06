import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8080"
});

Api.interceptors.request.use(async(config)=>{
  try{
    const userLogado = await JSON.parse( localStorage.getItem("userLogado"))  ;
    if(userLogado){
      config.headers.Authorization = `Bearer ${userLogado.token}`
     
    }
    return config ; 
  }catch(erro){
    console.log("erro no interceptor");
  }
})

export default Api;
