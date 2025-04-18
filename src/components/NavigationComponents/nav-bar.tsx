import Button from '@/components/ui/button'
import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export const NavBar = () => {
	return (
		<nav className='flexBetween max-container padding-container relative z-30 py-5'>
			<Link href='/'>
				<Image src='/hilink-logo.svg' alt='Hilink' width={74} height={29} />
			</Link>
			<ul className='hidden h-full gap-12 lg:flex'>
				{NAV_LINKS.map(link => (
					<Link
						key={link.key}
						href={link.href}
						className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all duration-300 hover:font-bold'
					>
						{link.label}
					</Link>
				))}
			</ul>
			<div className='lg:flexCenter hidden'>
				<Button
					type='button'
					label='Login'
					icon='/user.svg'
					variant='btn_dark_green'
				/>
			</div>
		</nav>
	)
}
