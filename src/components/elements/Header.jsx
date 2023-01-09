import styles from './Header.modele.scss'
import Search from '../UI /Search';
const Header = () => {
    return ( 
    <div className={styles.header}>
        <a href="/">
            <img src="" alt="" />
        </a>
        <Search />
    </div> 
    );
}
 
export default Header;