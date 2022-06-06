import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import useAuth from './../../hooks/useAuth'
import api from './../../services/api/db'

const PostTask = () => {
	const auth = useAuth()

	const tabs = ['Название', 'Описание', 'Бюджет', 'Публикация']

	const [active, setActive] = useState(0)
	const [tasks, setTasks] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		api
			.post('/tasks')
			.then(function (response) {
				setTasks(response.data)
				setLoading(true)
			})
			.catch(function (error) {
				console.log(error)
			})
	}, [])

	const [postTitle, setPostTitle] = useState('')
	const [postDescr, setPostDescr] = useState('')
	const [postDeadlines, setPostDeadlines] = useState('')
	const [postContract, setPostContract] = useState(false)
	const [postPrice, setPostPrice] = useState('')
	const [postType, setPostType] = useState('')

	function changePostTitle(event) {
		setPostTitle(event.target.value)
	}
	function changePostDescr(event) {
		setPostDescr(event.target.value)
	}
	function changePostDeadlines(event) {
		setPostDeadlines(event.target.value)
	}
	function changePostPrice(event) {
		setPostPrice(event.target.value)
	}
	function next(params) {
		setActive(params)
	}

	function declOfNum(number, titles) {
		const cases = [2, 0, 1, 1, 1, 2]
		return titles[
			number % 100 > 4 && number % 100 < 20
				? 2
				: cases[number % 10 < 5 ? number % 10 : 5]
		]
	}
	return auth.user ? (
		<div className="create-task">
			<div className="create-task__progress">
				{tabs.map((tab, index) => (
					<span
						className={active === index ? 'active' : ''}
						key={index}
						onClick={() => setActive(index)}>
						{tab}
					</span>
				))}
			</div>
			<div className={`create-task__stage ${active === 0 ? 'show' : ''}`}>
				<div className="title">Что нужно сделать</div>
				<div className="text">
					Придумайте заголовок вашего задания. Кратко опишите, какую задачу надо
					реализовать исполнителю.
				</div>
				<div className="input">
					<label htmlFor="title">Заголовок</label>
					<input
						id="title"
						type="text"
						name="title"
						onChange={changePostTitle}
					/>
				</div>
				<button
					className="create-task__button button"
					onClick={() => {
						next(1)
					}}>
					Далее
				</button>
			</div>
			<div className={`create-task__stage ${active === 1 ? 'show' : ''}`}>
				<div className="title">Описание задания</div>
				<div className="text">
					Опишите подробно, что необходимо сделать в рамках проекта. Чем
					подробнее опишите задачу, тем качественнее будет результат.
				</div>
				<div className="text">
					Укажите cущественные требования, которым должен соответствовать
					результат: форматы файлов, способы проверки и пр.
				</div>
				<div className="input">
					<label htmlFor="descr">Описание</label>
					<textarea
						id="descr"
						type="text"
						name="descr"
						cols="10"
						rows="10"
						onChange={changePostDescr}></textarea>
				</div>
				<button
					className="create-task__button button"
					onClick={() => {
						next(2)
					}}>
					Далее
				</button>
			</div>
			<div className={`create-task__stage ${active === 2 ? 'show' : ''}`}>
				<div className="title">Условия сотрудничества</div>
				<div className="text">
					Для максимальной эффективности рекомендуем указывать ожидаемую
					стоимость и сроки.
				</div>
				<div className="input">
					<label htmlFor="time">Максимальный срок выполнения</label>
					<div className="input-box">
						<input
							id="time"
							type="text"
							name="time"
							placeholder="Введите срок"
							onChange={changePostDeadlines}
						/>
						<div className="input-box__info">в днях</div>
					</div>
				</div>
				<div className="input">
					<label htmlFor="time">Стоимость</label>
					<div className="input-box">
						<div className="input-box__contract">
							<input
								type="checkbox"
								name="contract"
								id="contract"
								onClick={() => setPostContract(!postContract)}
							/>
							<label htmlFor="contract">Договорная</label>
						</div>
						<input
							id="time"
							type="text"
							name="time"
							placeholder={
								postContract
									? 'Стоимость работ согласовывается индивидуально'
									: ''
							}
							onChange={changePostPrice}
							disabled={postContract}
						/>
						<div className="input-box__info">тенге</div>
					</div>
				</div>
				<div className="input">
					<label htmlFor="treaty">Тип договора</label>
					<div className="rows">
						<div className="input-radio">
							<input
								type="radio"
								name="pay"
								id="treaty"
								defaultChecked
								onClick={() => setPostType('По договоренности')}
							/>
							<label htmlFor="treaty">По договоренности</label>
						</div>
						<div className="input-radio">
							<input
								type="radio"
								name="pay"
								id="agreement"
								onClick={() => setPostType('Заключение договора')}
							/>
							<label htmlFor="agreement">Заключение договора</label>
						</div>
					</div>
				</div>
				<button
					className="create-task__button button"
					onClick={() => {
						next(3)
					}}>
					Далее
				</button>
			</div>
			<div className={`create-task__stage ${active === 3 ? 'show' : ''}`}>
				<div className="title">Ваш проект</div>
				<div className="result">
					<div className="result__item">
						<div className="result__title">Название</div>
						<div className="result__value">{postTitle}</div>
					</div>
					<div className="result__item">
						<div className="result__title">Описание</div>
						<div className="result__value">{postDescr}</div>
					</div>
					<div className="result__item">
						<div className="result__title">Бюджет</div>
						<div className="result__value">
							{postContract ? 'Договорная' : `${postPrice} тенге`}{' '}
						</div>
					</div>
					<div className="result__item">
						<div className="result__title">Срок исполнения</div>
						<div className="result__value">
							{postDeadlines}{' '}
							{declOfNum(postDeadlines, ['день', 'дня', 'дней'])}
						</div>
					</div>
					<div className="result__item">
						<div className="result__title">Варианты оплаты</div>
						<div className="result__value">{postType}</div>
					</div>
				</div>
				<button className="button">Разместить задание</button>
			</div>
		</div>
	) : (
		<div className="need-log">
			<div className="need-log__message">
				Для размещения задания вам необходимо авторизоваться
			</div>
			<div className="need-log__button">
				<Link className="button" to="/login">
					Войти
				</Link>
				<Link className="button button--white" to="/register">
					Зарегистрироваться
				</Link>
			</div>
		</div>
	)
}

export default PostTask
