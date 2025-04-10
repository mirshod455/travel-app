import Button from '@/components/ui/button'
import Image from 'next/image'

export const GetApp = () => {
	return (
		<section className='flexCenter w-full flex-col pb-[100px]'>
			<div className='get-app'>
				{/* LEFT SIDE */}
				<div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
					<h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>
						Get for free now!
					</h2>
					<p className='regular-16 text-gray-10'>
						Available on IOS and Android
					</p>
					<div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
						<Button
							type='button'
							label='AppStore'
							icon={
								process.env.NODE_ENV === 'production'
									? `${process.env.NEXT_PUBLIC_BASE_PATH}/apple.svg`
									: '/apple.svg'
							}
							variant='btn_white_text'
							full
						/>
						<Button
							type='button'
							label='PlayMarket'
							icon={
								process.env.NODE_ENV === 'production'
									? `${process.env.NEXT_PUBLIC_BASE_PATH}/android.svg`
									: '/android.svg'
							}
							variant='btn_dark_green'
							full
						/>
					</div>
				</div>

				{/* RIGHT SIDE */}
				<div className='flex flex-1 items-center justify-end'>
					<Image
						src={
							process.env.NODE_ENV === 'production'
								? `${process.env.NEXT_PUBLIC_BASE_PATH}/phone.png`
								: '/phone.png'
						}
						alt='phone'
						width={550}
						height={870}
					/>
				</div>
			</div>
		</section>
	)
}
