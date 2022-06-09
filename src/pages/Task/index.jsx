import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import useAuth from './../../hooks/useAuth'
import api from './../../services/api/db'

import avatar from './../../assets/images/avatar.svg'
import Loading from '../../components/Loading'

function Task() {
	const auth = useAuth()
	const [task, setTask] = useState([])
	const [loaded, setLoaded] = useState(false)
	let back = useNavigate()

	let { id } = useParams()

	useEffect(() => {
		api
			.get(`/tasks/${id}`)
			.then(function (response) {
				setTask(response.data)
				setLoaded(true)
			})
			.catch(function (error) {
				console.log(error)
			})
	}, [])

	function declOfNum(number, titles) {
		const cases = [2, 0, 1, 1, 1, 2]
		return titles[
			number % 100 > 4 && number % 100 < 20
				? 2
				: cases[number % 10 < 5 ? number % 10 : 5]
		]
	}

	return (
		<div>
			<button className="back" onClick={() => back(-1)}>
				Назад
			</button>

			{loaded ? (
				<div className="task">
					<div className="task__author">
						<div className="task__author-image">
							<img src={avatar} alt="avatar" />
						</div>
						<div className="task__author-text">
							<div className="task__author-name">{task.author}</div>
							<div className="task__author-registration">
								Дата регистрации: 03.04.2022
							</div>
						</div>
					</div>
					<div className="task__about-box">
						<div className="task__about">
							<div className="title">{task.title}</div>
							<div className="subtitle">Задача</div>
							<div className="task__descr">{task.description} </div>
						</div>
						<div className="task__info">
							<div className="subtitle">Информация по заданию</div>
							<div className="task__info-lists">
								<div className="task__info-item">
									<span>Статус рабочей области:</span>
									<span>{task.status == 1 ? 'Поиск исполнителя' : ''}</span>
								</div>
								<div className="task__info-item">
									<span>Стоимость:</span>
									<span>{task.price} тенге</span>
								</div>
								<div className="task__info-item">
									<span>Срок выполнения:</span>
									<span>
										{task.date} {declOfNum(task.date, ['день', 'дня', 'дней'])}
									</span>
								</div>
								<div className="task__info-item">
									<span>Дата публикации:</span>
									<span>{task.published}</span>
								</div>
							</div>
							{auth.user ? (
								<button className="button full">Предложить услуги</button>
							) : (
								<Link className="task__auth button full" to="/login">
									Авторизоваться
								</Link>
							)}
						</div>
					</div>
				</div>
			) : (
				<Loading />
			)}
		</div>
	)
}

export default Task
