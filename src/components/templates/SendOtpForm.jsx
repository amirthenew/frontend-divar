const SendOtpForm = ({mobile,setMobile,setStep}) => {
    return (
        <>
        <form>
<p>ورود به حساب کاربری</p>
<span>
    برای استفاده از امکانات دیوار لطفا شماره موبایل خود را وارد کنید
</span>
<label htmlFor="input">شماره موبایل خود را وارد کنید</label>
<input 
type="text" 
id="input" 
placeholder="َشماره موبایل"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}/>
        </form>
        
        </>
      );
}
 
export default SendOtpForm;