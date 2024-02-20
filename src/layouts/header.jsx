import { Link } from "react-router-dom";
import styles from './Header.module.css'
const Header = () => {
    return  ( 
        <>
            <header className={styles.header}>
        <div>
            <Link to='/'>
                <img className={styles.logo} src="divar.svg"/>
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
            <Link className={styles.button} to='/dashboard'>ثبت آگهی</Link>
        </div>

    </header>

        </>

);
}

    

 
export default Header;