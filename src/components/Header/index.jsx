import React from 'react'
import { Link } from "react-router-dom";
import logo from './../../assets/images/logo.svg'

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				<Link to="/" className='logo__link'><img src={logo} alt="Freelance" /></Link>
				<div className="logo__descr">
					<span className="logo__title">Freelance</span>
					<span className="logo__subtitle">фриланс площадка для студентов</span>
				</div>
			</div>
			<div className="nav">
				<Link className='nav__item' to="customer">Заказчику</Link>
				<Link className='nav__item' to="freelancer">Фрилансеру</Link>
				<Link className='nav__item' to="login">Вход</Link>
			</div>
		</header>
	)
}

export default Header