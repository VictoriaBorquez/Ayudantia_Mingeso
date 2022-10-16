import axios from "axios";

export class UserService{
    //baseUrl = "http://localhost:8003/user/";
    baseUrl = "http://contenedor-user:8003/user/";
    getAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }

}