import { sendOtp } from "services/auth";
import styles from '../../components/templates/SendOtpForm.module.css'
const SendOtpForm = ({mobile,setMobile,setStep}) => {

    const submitHandler = async (event)=>{
        event.preventDefault()
        if(mobile.length!==11)return;
        //validation
        console.log(event)

        const {response,error} = await sendOtp(mobile);
        if(response) setStep(2)
        if(error) console.log(error.response.data.message)
        console.log(response,error)
    }
    return (
        <>
        <form onSubmit={submitHandler} className={styles.form}> 
<p>ورود به حساب کاربری</p>
<span>
    برای استفاده از امکانات دیوار لطفا شماره موبایل خود را وارد کنید
</span>
<label htmlFor="input">شماره موبایل خود را وارد کنید</label>
<input
required 
type="text" 
id="input" 
placeholder="َشماره موبایل"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}/>
<button type="submit">ارسال کد تایید</button>
        </form>
        
        </>
      );
}
 
export default SendOtpForm;