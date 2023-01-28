import project01 from './../../../images/01.jpg'
import './style.css'

const  OneFilm = () => {
    return ( 
        <div className='Blocks'>
            <button className='button_nav'>Back</button>
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
            <a>
                <div className="project">
                    <img src={project01} className="project__img"/>
                    <h3 className="project__title">Love Dead Robots</h3>
                </div>
            </a>
            <button className='button_nav'>Next</button>
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
