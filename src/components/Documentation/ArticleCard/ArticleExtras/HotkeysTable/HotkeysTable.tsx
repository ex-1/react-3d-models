// -- HotkeysTable --

import { ArticleExtraHotkey } from '@/config/something'
import './HotkeysTable.scss'
import KeyButton from './KeyButton'

interface HotkeysTableProps {
	table: ArticleExtraHotkey[]
}

export default function HotkeysTable({ table }: HotkeysTableProps) {
	return (
		<div className='keys-table-wrapper'>
			<div className='keys-table'>
				<div className='keys-table__row table-header'>
					<div className='col-3 keys-table__keys'>
						<span>Сочетание клавиш</span>
					</div>
					<div className='col keys-table__action'>
						<span>Действие</span>
					</div>
				</div>
				{table.map((d, i) => (
					<div className='keys-table__row' key={`hotkeys-row-${i}`}>
						<div className='col-3 keys-table__keys'>
							{d.keys.map((k, i) => (
								<KeyButton name={k} key={`keybutton-${k}-${i}`} />
							))}
						</div>
						<div className='col keys-table__action'>
							<span>{d.action}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
