import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<div>
			<div className="title">Фильтр заданий</div>
			<div className="filter">
				<div className="filter__input">
					<label for="word">Ключевые слова</label>
					<input id="word" type="text" name="word" />
				</div>
				<div className="filter__input">
					<label for="price_from">Оплата, от</label>
					<input id="price_from" type="text" name="price_from" />
				</div>
				<div className="filter__input">
					<label for="price_to">Оплата, до</label>
					<input id="price_to" type="text" name="price_to" />
				</div>
			</div>
			<div className="task-list">
				<Link to="task" className="task-list__item">
					<div className="task-list__title">
						Решить задачки по Объектно-ориентированному программированию.Python
					</div>
					<div className="task-list__descr">
						Решить прикрепленный файл в Jupiter Notebook до конца, основываясь на уже сделанных задачах. Подкорректировать уже сделанные задачи, если это необходимо...
					</div>
					<div className="task-list__info">
						<div className="task-list__price">
							5000 тенге
						</div>
						<div className="task-list__date">
							Срок выполнения: 5 дней
						</div>
					</div>
					<div className="task-list__published">
						Опубликован день назад
					</div>
				</Link>
				<Link to="task" className="task-list__item">
					<div className="task-list__title">
						Решить задачки по Объектно-ориентированному программированию.Python
					</div>
					<div className="task-list__descr">
						Решить прикрепленный файл в Jupiter Notebook до конца, основываясь на уже сделанных задачах. Подкорректировать уже сделанные задачи, если это необходимо...
					</div>
					<div className="task-list__info">
						<div className="task-list__price">
							5000 тенге
						</div>
						<div className="task-list__date">
							Срок выполнения: 5 дней
						</div>
					</div>
					<div className="task-list__published">
						Опубликован день назад
					</div>
				</Link>
				<Link to="task" className="task-list__item">
					<div className="task-list__title">
						Решить задачки по Объектно-ориентированному программированию.Python
					</div>
					<div className="task-list__descr">
						Решить прикрепленный файл в Jupiter Notebook до конца, основываясь на уже сделанных задачах. Подкорректировать уже сделанные задачи, если это необходимо...
					</div>
					<div className="task-list__info">
						<div className="task-list__price">
							5000 тенге
						</div>
						<div className="task-list__date">
							Срок выполнения: 5 дней
						</div>
					</div>
					<div className="task-list__published">
						Опубликован день назад
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Home