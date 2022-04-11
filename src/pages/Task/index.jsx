import React from 'react'
import avatar from './../../assets/images/avatar.svg'

function Task() {
	return (
		<div>
			<button className="back">Назад</button>
			<div className="task">
				<div className="task__author">
					<div className="task__author-image">
						<img src={avatar} alt="avatar" />
					</div>
					<div className="task__author-text">
						<div className="task__author-name">
							Семён Дуров
						</div>
						<div className="task__author-registration">
							Дата регистрации: 03.04.2022
						</div>
					</div>
				</div>
				<div className="task__about-box">
					<div className="task__about">
						<div className="title">
							Решить задачки по Объектно-ориентированному программированию.Python
						</div>
						<div className="subtitle">
							Задача
						</div>
						<div className="task__descr">
							Решить прикрепленный файл в Jupiter Notebook до конца, основываясь на уже сделанных задачах. Подкорректировать уже сделанные задачи, если это необходимо.
						</div>
					</div>
					<div className="task__info">
						<div className="subtitle">
							Информация по заданию
						</div>
						<div className="task__info-lists">
							<div className="task__info-item">
								<span>Статус рабочей области:</span>
								<span>Поиск исполнителя</span>
							</div>
							<div className="task__info-item">
								<span>Стоимость:</span>
								<span>5000 тенге</span>
							</div>
							<div className="task__info-item">
								<span>Срок выполнения:</span>
								<span>3 дня</span>
							</div>
							<div className="task__info-item">
								<span>Дата публикации:</span>
								<span>2022-04-03 09:30</span>
							</div>
						</div>
						<button className="button full">Предложить услуги</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Task