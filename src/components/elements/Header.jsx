import styles from './Header.module.scss'
import Profile from './Profile'
import Search from '../UI/Search';
const Header = () => {
    return ( 
        <div className={styles.header}>
                <div>
                    <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width="112" height="" alt="netflix logo"/> 
                </a>
                <Search className="search"/>
            </div>
            <Profile />
        </div> 
    );
}
 
export default Header


