import styles from './Search.module.scss'

const Search = () => {
	return (
		<div className={styles.search}>
			<div>
				<i className='bx bx-search-alt'></i>
				<input type='text' placeholder='I`m searching for...' />
			</div>
			<i className='bx bx-customize'></i>
		</div>
	)
}

export default Search