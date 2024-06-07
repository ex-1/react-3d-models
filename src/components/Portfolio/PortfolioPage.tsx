// -- PortfolioPage --

import Button from '../Shared/Button/Button'

import { TProfilePageCfg } from '@/config/something'
import { getConfig } from '@/utils/getConfig'

import config from '@/config/profile.config.json'
const cfg = getConfig(config) as TProfilePageCfg

import './PortfolioPage.scss'

export default function PortfolioPage() {
	return (
		<div className='profile-wrapper'>
			<div className='profile'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-5 right-side'>
							<div className='person-avatar-wrapper'>
								<img
									src={cfg.avatar}
									alt={`Unable to load avatar: ${cfg.avatar}`}
									className='person-avatar'
								/>
							</div>
						</div>
						<div className='col-md-7 left-side'>
							<div className='about-wrapper'>
								<div className='about__title'>
									<h1>{cfg['large-title']}</h1>
								</div>
								<div className='about__more'>
									<h3>{cfg['small-title']}</h3>
								</div>
								<Button
									className='models-btn'
									onClick={() => window.location.replace('/')}
								>
									<span>{'Смотреть модели'}</span>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
