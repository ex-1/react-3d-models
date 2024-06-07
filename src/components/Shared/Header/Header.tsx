// -- Header --

import './Header.scss'

export default function Header() {
	return (
		<div className='header-wrapper'>
			<div className='container-fluid'>
				<div className='header row'>
					<div className='col'>
						<div className='header__logo'>
							<div className='svg-logo' />
							<h2>Модельки моделечки</h2>
						</div>
					</div>
					<div className='col-md-5'>
						<div className='nav-wrapper'>
							<ul className='nav'>
								<li className='nav__item'>
									<a className='nav__link' href='/'>
										Home
									</a>
								</li>
								<li className='nav__item'>
									<a className='nav__link' href='/portfolio'>
										Portfolio
									</a>
								</li>
								<li className='nav__item'>
									<a className='nav__link' href='/documentation'>
										Documentation
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
