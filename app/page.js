// contentful
import { createClient } from 'contentful'

// components
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Transformations from '@/components/Transformations'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const hero = await client.getEntries({
		content_type: 'heroSection'
	})

	const services = await client.getEntries({
		content_type: 'servicesSection'
	})

	const transformations = await client.getEntries({
		content_type: 'transformationsSection'
	})

	return (
		<main>
			<Hero hero={hero.items[0]} />
			<Services services={services.items[0]} />
			<Transformations transformations={transformations.items[0]} />
		</main>
	)
}
