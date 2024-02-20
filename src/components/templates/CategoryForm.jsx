import { useState } from "react";
import styles from './CategoryForm.module.css'
import { useMutation } from "@tanstack/react-query";
import { addCategory } from "src/services/admin";
const CategoryForm = () => {

const [form,setForm]=useState({name:'',slug:'',icon:''})

const {mutate,isLoading,error,data}=useMutation(addCategory)

console.log({isLoading,error,data})

const changeHandler = (event) =>{
    setForm({...form,[event.target.name]:event.target.value})
}

const submitHandler = (event)=>{
event.preventDefault()

if (!form.name || !form.slug || !form.icon) return;
mutate(form)
console.log(form)
}
    return (
    
    <form className={styles.form} onChange={changeHandler} onSubmit={submitHandler}>
        <h3>دسته بندی جدید</h3>
        {data?.status ===201 && <p>دسته بندی با موفقیت اضافه شد</p>}
        <label htmlFor="name">اسم دسته بندی</label>
        <input type="text" name="name" id="name"/>
        <label htmlFor="slug">اسلاگ</label>
        <input type="text" name="slug" id="slug"/>
        <label htmlFor="icon">آیکون</label>
        <input type="text" name="icon" id="icon"/>
        <button type="submit">ایجاد</button>
    </form>    );
}
 
export default CategoryForm;