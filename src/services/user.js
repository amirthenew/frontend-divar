import api from "src/configs/api"
import { getCookie } from "src/utils/cookies";

const token = getCookie("accessToken")


const getProfile = ()=> api.get("user/whoami").then((res)=> res || false);
export {getProfile}