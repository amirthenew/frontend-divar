import { checkOtp } from "../../services/auth"

const CheckOtpForm = ({code,setCode,mobile,setStep}) => {

    const submitHandler = async (event) => {
        event.preventDefault()
        if (code.length !== 5) return
        console.log(code,mobile)


        const {response,error} = await checkOtp(mobile,code);
        if(response){
            console.log(response)
        }
        if(error) console.log(error.response.data.message)
    }
    return ( <>
    <form onSubmit={submitHandler}>
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
        <button type="submit">ورود</button>
        <button onClick={()=>setStep(1)}>تغییر شماره موبایل</button>
    </form>
    </> );
}
 
export default CheckOtpForm;