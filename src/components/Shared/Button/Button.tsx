// -- Button --

import './Button.scss'

type ButtonProps = {
	className?: string
	children?: React.ReactNode
} & Omit<
	React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>,
	'className'
>

export default function Button(props: ButtonProps) {
	return (
		<button
			{...props}
			className={`${props.className ? `primary-btn ${props.className}` : 'primary-btn'}`}
		>
			{props.children}
		</button>
	)
}
