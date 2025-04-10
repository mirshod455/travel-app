import { FC } from 'react'

interface FooterColumnProps {
	title: string
	children: React.ReactNode
}

export const FooterColumnComponent: FC<FooterColumnProps> = ({
	title,
	children,
}: FooterColumnProps) => {
	return (
		<div className='flex flex-col gap-4'>
			<h4 className='bold-18 whitespace-nowrap'>{title}</h4>
			{children}
		</div>
	)
}
