import { useState } from "react";
import CheckOtpForm from "../components/templates/CheckOtpForm";
import SendOtpForm from "../components/templates/SendOtpForm";

const AuthPage = () => {

const [step,setStep]=useState(2)

    return ( 
<>
{step===1 && <SendOtpForm/>}
{step===2 && <CheckOtpForm/>}
</>
     );
}
 
export default AuthPage;