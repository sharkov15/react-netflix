import project01 from './../../../images/01.jpg'
import './style.css'

const  OneFilm = () => {
    return ( 
        <div className='Blocks'>
            <a>
                <div className="project">
                    <img src={project01} className="project__img"/>
                    <h3 className="project__title">Love Dead Robots</h3>
                </div>
            </a>
            <a>
                <div className="project">
                    <img src={project01} className="project__img"/>
                    <h3 className="project__title">Love Dead Robots</h3>
                </div>
            </a>
            <a>
                <div className="project">
                    <img src={project01} className="project__img"/>
                    <h3 className="project__title">Love Dead Robots</h3>
                </div>
            </a>
            <a>
                <div className="project">
                    <img src={project01} className="project__img"/>
                    <h3 className="project__title">Love Dead Robots</h3>
                </div>
            </a>
        </div>
        
        
    );
}
 
export default OneFilm;
