import { Link } from "react-router-dom";

const Header = () => {
    return  ( 
        <>
            <header>
        <div>
            <Link to='/'>
                <img src="divar.svg"/>
            </Link>
            <span src='loaction.svg'></span>
            <p>تهران</p>
        </div>
        <div>
            <Link to='/auth'>
                <span>
                    <img src="profile.svg"/>
                    <p>دیوار من</p>
                </span>
            </Link>
            <Link to='/dashboard'>ثبت آگهی</Link>
        </div>

    </header>

        </>

);
}

    

 
export default Header;