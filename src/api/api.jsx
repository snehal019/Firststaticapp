
import axios from "axios";

const API =axios.create({
    baseURL : "https://localhost:7024/api",
    withCredentials: true, //
});

export default  API;


