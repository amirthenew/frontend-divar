import { Route, Routes } from "react-router-dom";
import PageNotFound from "src/pages/404";
import AdminPage from "src/pages/AdminPage";
import AuthPage from "src/pages/AuthPage";
import DashboardPage from "src/pages/DashboardPage";
import Homepage from "src/pages/HomePage";


const Router = () => {
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