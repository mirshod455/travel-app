import Image from 'next/image'
import { FC } from 'react'

interface FeatureItemProps {
	title: string
	description: string
	icon: string
	variant: string
}

export const FeatureItem: FC<FeatureItemProps> = ({
	title,
	description,
	icon,
	variant,
}: FeatureItemProps) => {
	return (
		<li className='flex w-full flex-1 flex-col items-start'>
			<div className={`rounded-full p-4 lg:p-7 ${variant}`}>
				<Image src={icon} alt='map' width={28} height={28} />
			</div>
			<h2 className='bold-20 lg:bold-32 mt-5 capitalize'>{title}</h2>
			<p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>
				{description}
			</p>
		</li>
	)
}
