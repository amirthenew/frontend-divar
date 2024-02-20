import Footer from "./Footer";
import Header from "./header";

const  Layout = ({children}) => {
    return ( 

        <>
        <Header/>
        <div>{children}</div>
        <Footer/>
        </>
     );
}
 
export default  Layout;