import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from './../../services/api/db'

function Home() {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		api
			.get('/posts')
			.then(function (response) {
				setTasks(response.data)
			})
			.catch(function (error) {
				console.log(error)
			})
	}, [])

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
				{tasks ? (
					tasks.map((task) => (
						<Link to={'task/' + task.id} className="task-list__item">
							<div className="task-list__title">{task.title}</div>
							<div className="task-list__descr">{task.description}</div>
							<div className="task-list__info">
								<div className="task-list__price">{task.price}</div>
								<div className="task-list__date">{task.date}</div>
							</div>
							<div className="task-list__published">{task.published}</div>
						</Link>
					))
				) : (
					<div>Заданий нет</div>
				)}
			</div>
		</div>
	)
}

export default Home
