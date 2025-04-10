import { FeatureItem } from '@/components/HomePageComponents/FeatureComponents/FeatureItemComponent'
import { FEATURES } from '@/constants'
import Image from 'next/image'

export const Features = () => {
	return (
		<section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
			<div className='max-container padding-container relative flex w-full justify-end'>
				{/* LeftSide */}
				<div className='flex flex-1 lg:min-h-[900px] '>
					<Image
						src={
							process.env.NODE_ENV === 'production'
								? `${process.env.NEXT_PUBLIC_BASE_PATH}/phone.png`
								: '/phone.png'
						}
						alt='phone'
						width={440}
						height={1000}
						className='feature-phone'
					/>
				</div>

				{/* RightSide */}
				<div className='z-20 flex w-full flex-col lg:w-[60%]'>
					<div className='relative'>
						<Image
							src={
								process.env.NODE_ENV === 'production'
									? `${process.env.NEXT_PUBLIC_BASE_PATH}/camp.svg`
									: '/camp.svg'
							}
							alt='camp'
							width={50}
							height={50}
							className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]'
						/>
						<h2 className='bold-40 lg:bold-64'>Our Features</h2>
					</div>
					<ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20'>
						{FEATURES.map(feature => (
							<FeatureItem
								key={feature.title}
								title={feature.title}
								description={feature.description}
								icon={
									process.env.NODE_ENV === 'production'
										? `${process.env.NEXT_PUBLIC_BASE_PATH}${feature.icon}`
										: `${feature.icon}`
								}
								variant={feature.variant}
							/>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
