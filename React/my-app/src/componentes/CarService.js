import axios from "axios";

export class CarService{
    //baseUrl = "http://localhost:8002/car/";
    baseUrl = "http://contenedor-car:8002/car/";
    getAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }
}