import React from 'react'
import styles from './Answer.module.sass'

const Answer = () => {
	return (
		<div>
			<div className="title">Задания</div>
			<div className={styles.head}>
				<div className={styles.head__item}>№</div>
				<div className={styles.head__item}>ФИО</div>
				<div className={styles.head__item}>Предлагаемая цена</div>
				<div className={styles.head__item}>Срок выполнения</div>
				<div className={styles.head__item}>Сообщение</div>
			</div>
			<div className={styles.list}>
				<div className={styles.list__item}>
					<div className={styles.list__column}>1</div>
					<div className={styles.list__column}>Сулейменов Асыл</div>
					<div className={styles.list__column}>5000</div>
					<div className={styles.list__column}>4 дня</div>
					<div className={styles.list__column}>Текст</div>
				</div>
				<div className={styles.list__item}>
					<div className={styles.list__column}>2</div>
					<div className={styles.list__column}>Сулейменов Асыл</div>
					<div className={styles.list__column}>5000</div>
					<div className={styles.list__column}>4 дня</div>
					<div className={styles.list__column}>Текст</div>
				</div>
			</div>
		</div>
	)
}

export default Answer