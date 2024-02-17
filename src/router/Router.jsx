import { useQuery } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "src/pages/404";
import AdminPage from "src/pages/AdminPage";
import AuthPage from "src/pages/AuthPage";
import DashboardPage from "src/pages/DashboardPage";
import Homepage from "src/pages/HomePage";
import { getProfile } from "src/services/user";


const Router = () => {
    const {data,isLoading,error}=useQuery(["profile"],getProfile)
    // console.log({data,isLoading,error})
    // if (isLoading) return <h1>Loading ... </h1>
    return ( 
        <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="auth" element={<AuthPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        </Routes>
     );
}
 
export default Router;