// -- KeyButton --
import './HotkeysTable.scss'

interface KeyButtonProps {
	name: string
}

export default function KeyButton({ name }: KeyButtonProps) {
	return (
		<div className='key-wrapper'>
			<span className='key'>{name}</span>
		</div>
	)
}
