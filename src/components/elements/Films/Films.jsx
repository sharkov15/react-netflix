import OneFilm from './oneFilm';
import './style.css'

const Films = () => {
    return ( 
    <div className="Main">
        <h1>Recomend</h1>
            <div className="block">
                <OneFilm />
            </div>
    </div> 
    );
}
 
export default Films;