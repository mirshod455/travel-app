import Image from 'next/image'
import { FC } from 'react'

type ButtonProps = {
	type: 'submit' | 'button'
	label: string
	icon?: string
	variant: 'btn_dark_green' | 'btn_green' | 'btn_white_text'
	full?: boolean
}

const Button: FC<ButtonProps> = ({ type, label, icon, variant, full }) => {
	return (
		<button
			type={type}
			className={`flexCenter gap-3 rounded-full border ${variant} ${
				full && 'w-full'
			} cursor-pointer bold-16 whitespace-nowrap`}
		>
			{icon && <Image src={icon} alt={icon} width={20} height={20} />}
			{label}
		</button>
	)
}

export default Button
