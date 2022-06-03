import React, { useState } from 'react'

const PostTask = () => {
	const tabs = ['Название', 'Описание', 'Бюджет', 'Публикация']
	const [active, setActive] = useState(tabs[0])

	return (
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
			<div className="create-task__stage show">
				<div className="title">Что нужно сделать</div>
				<div className="text">
					Придумайте заголовок вашего задания. Кратко опишите, какую задачу надо
					реализовать исполнителю.
				</div>
				<div className="input">
					<label for="title">Заголовок</label>
					<input id="title" type="text" name="title" />
				</div>
			</div>
			<div className="create-task__stage">
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
					<label for="descr">Описание</label>
					<textarea
						id="descr"
						type="text"
						name="descr"
						cols="10"
						rows="10"></textarea>
				</div>
			</div>
			<div className="create-task__stage">
				<div className="title">Условия сотрудничества</div>
				<div className="text">
					Для максимальной эффективности рекомендуем указывать ожидаемую
					стоимость и сроки.
				</div>
				<div className="input">
					<label for="time">Максимальный срок выполнения</label>
					<div className="input-box">
						<input
							id="time"
							type="text"
							name="time"
							placeholder="Введите срок"
						/>
						<div className="input-box__info">в днях</div>
					</div>
				</div>
				<div className="input">
					<label for="time">Стоимость</label>
					<div className="input-box">
						<div className="input-box__contract">
							<input type="checkbox" name="contract" id="contract" />
							<label for="contract">Договорная</label>
						</div>
						<input
							id="time"
							type="text"
							name="time"
							placeholder="Стоимость работ согласовывается индивидуально"
						/>
						<div className="input-box__info">тенге</div>
					</div>
				</div>
				<div className="input">
					<label for="treaty">Стоимость</label>
					<div className="rows">
						<div className="input-radio">
							<input type="radio" name="pay" id="treaty" />
							<label for="treaty">По договоренности</label>
						</div>
						<div className="input-radio">
							<input type="radio" name="pay" id="agreement" />
							<label for="agreement">Заключение договора</label>
						</div>
					</div>
				</div>
			</div>
			<div className="create-task__stage">
				<div className="title">Ваш проект</div>
				<div className="result">
					<div className="result__item">
						<div className="result__title">Название</div>
						<div className="result__value">
							Укажите cущественные требования, которым должен соответствовать
							результат: форматы файлов, способы проверки и пр.
						</div>
					</div>
					<div className="result__item">
						<div className="result__title">Описание</div>
						<div className="result__value">
							Решить прикрепленный файл в Jupiter Notebook до конца, основываясь
							на уже сделанных задачах. Подкорректировать уже сделанные задачи,
							если это необходимо.
						</div>
					</div>
					<div className="result__item">
						<div className="result__title">Бюджет</div>
						<div className="result__value">5000 тенге</div>
					</div>
					<div className="result__item">
						<div className="result__title">Срок исполнения</div>
						<div className="result__value">5 дней</div>
					</div>
					<div className="result__item">
						<div className="result__title">Варианты оплаты</div>
						<div className="result__value">По договору</div>
					</div>
				</div>
				<button className="button">Разместить задание</button>
			</div>
		</div>
	)
}

export default PostTask
