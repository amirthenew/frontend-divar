import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { checkOtp } from "services/auth"
import { getProfile } from "src/services/user"
import {setCookie} from "utils/cookies"
import styles from '../../components/templates/checkOtpForm.module.css'

const CheckOtpForm = ({code,setCode,mobile,setStep}) => {
    const navigate = useNavigate()
    const {refetch} = useQuery(["profile"],getProfile)
    const submitHandler = async (event) => {
        event.preventDefault()
        if (code.length !== 5) return
        console.log(code,mobile)


        const {response,error} = await checkOtp(mobile,code);
        if(response){
            setCookie(response.data)
            navigate('/')
            refetch()
        }
        if(error) console.log(error.response.data.message)
    }
    return ( <>
    <form onSubmit={submitHandler} className={styles.form}>
        <p>تایید کد پیامک شده
        </p>
        <span>کد پیامک شده به شماره {mobile}را وارد کنید
        </span>
        <label htmlFor="input">کد تایید را وارد کنید</label>
        <input type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e)=> setCode(e.target.value)}/>
        <div className={styles.buttonBox}>
        <button className={styles.sendButton} type="submit">ورود</button>
        <button className={styles.backButton} onClick={()=>setStep(1)}>تغییر شماره موبایل</button>

        </div>
        
    </form>
    </> );
}
 
export default CheckOtpForm;