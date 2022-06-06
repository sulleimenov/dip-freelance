import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from './../../services/api/db'
import { declOfNum } from './../../utils'

function Home() {
	const [tasks, setTasks] = useState([])
	const [loading, setLoading] = useState(false)
	const [searchInput, setSearchInput] = useState('')

	const searchItems = (searchValue) => {
		setSearchInput(searchValue)
		tasks.filter((item) => {
			return Object.values(item.title)
				.join('')
				.toLowerCase()
				.includes(searchInput.toLowerCase())
		})
	}

	useEffect(() => {
		api
			.get('/tasks')
			.then(function (response) {
				setTasks(response.data)
				setLoading(true)
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
					<label htmlFor="word">Ключевые слова</label>
					<input
						onChange={(e) => searchItems(e.target.value)}
						id="word"
						type="text"
						name="word"
					/>
				</div>
				<div className="filter__input">
					<label htmlFor="price_from">Оплата, от</label>
					<input id="price_from" type="text" name="price_from" />
				</div>
				<div className="filter__input">
					<label htmlFor="price_to">Оплата, до</label>
					<input id="price_to" type="text" name="price_to" />
				</div>
			</div>
			<div className="task-list">
				{loading ? (
					tasks.map((task, index) => (
						<Link
							to={`task/${task.id}`}
							key={index}
							className="task-list__item">
							<div className="task-list__title">{task.title}</div>
							<div className="task-list__descr">{task.description}</div>
							<div className="task-list__info">
								<div className="task-list__price">{task.price} тенге</div>
								<div className="task-list__date">
									{task.date} {declOfNum(task.date, ['день', 'дня', 'дней'])}
								</div>
							</div>
							<div className="task-list__published">{task.published}</div>
						</Link>
					))
				) : (
					<div className="loading">Загрузка...</div>
				)}
			</div>
		</div>
	)
}

export default Home
