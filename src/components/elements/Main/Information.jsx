import Button from '../../UI/Button/Button'
import styles from './Main.module.scss'

const Information = ({ movie }) => {

	return (
		<div className={styles.info}>
			<img
				src={movie.logo}
				alt={movie.name}
				width='200'
				style={{ opacity: 0.7 }}
			/>

			<div className={styles.additional}>
				<span>{movie.year}</span>
				<span>{movie.limitAge}</span>
				<span>{movie.rating}</span>
				<span>{movie.duration}</span>
			</div>

			<div className={styles.description}>{movie.description}</div>

			<div className={styles.buttons}>
				<Button cb={() => console.log('video is open')}>
					<i className='bx bx-play' style={{ color: '#c62e21' }}></i>
					<span>Play</span>
				</Button>
				<Button>
					<i className='bx bx-plus'></i>
					<span>My list</span>
				</Button>
			</div>
		</div>
	)
}

export default Information