import api from "src/configs/api"
import { getCookie } from "src/utils/cookies";

console.log(getCookie("accessToken"))


const getProfile = ()=> api.get("/user/whoami");
export {getProfile}