import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './../../assets/images/logo.svg'
import useAuth from './../../hooks/useAuth'

const Header = () => {
	const auth = useAuth()
	const navigate = useNavigate()

	const onLogOut = () => {
		auth.logOut();
		navigate("/login");
	};
	return (
		<header className="header">
			<div className="logo">
				<Link to="/" className="logo__link">
					<img src={logo} alt="Freelance" />
				</Link>
				<div className="logo__descr">
					<span className="logo__title">Freelance</span>
					<span className="logo__subtitle">фриланс площадка для студентов</span>
				</div>
			</div>
			<div className="menu">
				<Link className="find" to="/">Найти работу</Link>
				<Link className="post" to="create">Разместить задание</Link>
			</div>
			<div className="nav">
				{auth.user ? (
					<span className="nav__item" onClick={onLogOut}>Выход</span>
					) : (
					<Link className="nav__item" to="login">Вход</Link>
				)}
			</div>
		</header>
	)
}

export default Header
