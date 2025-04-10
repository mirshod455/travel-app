import { Camp } from '@/components/HomePageComponents/Camp'
import { Features } from '@/components/HomePageComponents/FeatureComponents/Features'
import { GetApp } from '@/components/HomePageComponents/GetApp'
import { Guide } from '@/components/HomePageComponents/Guide'
import { Hero } from '@/components/HomePageComponents/Hero'

export default function Home() {
	return (
		<>
			<Hero />
			<Camp />
			<Guide />
			<Features />
			<GetApp />
		</>
	)
}
