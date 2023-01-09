import { DATA } from '../../../data'
import Information from './Information'
import Sidebar from '../../UI/Sidebar'
import styles from './Main.module.scss'
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation'

const Main = () => {
    return (
        <div>
            <Sidebar />
            <div style={{}}>
                <Information movie={DATA[0]} />
                <BottomNavigation/>
            </div>
        </div>
    )
}

export default Main
