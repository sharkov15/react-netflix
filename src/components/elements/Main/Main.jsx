import { useState } from 'react'
import { DATA } from '../../../data'
import BottomNavigation from '../../UI/BottomNavigation/BottomNavigation'
//import Sidebar from './../../UI/Sidebar'
import Episodes from '../Episodes/Episodes'
import Information from './Information'
import styles from './Main.module.scss'

const Main = () => {
	const [isSidebarShow] = useState(false)
	const [activeTab, setActiveTab] = useState(1)

	return (
		<div className={styles.wrapper}>
			{/* <Sidebar
				isSidebarShow={isSidebarShow}
				setIsSidebarShow={setIsSidebarShow}
			/> */}
			<div
				className={styles.main}
				style={{
					backgroundImage: `url(${DATA[0].mainImage})`,
					width: isSidebarShow ? '85%' : '100%',
				}}
			>
				{activeTab === 1 ? (
					<Information movie={DATA[0]} />
				) : (
					activeTab === 2 && <Episodes />
				)}
			</div>
			<BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
	)
}

export default Main