// contentful
import { createClient } from 'contentful'

// components
import Hero from '@/components/Hero'

export default async function Home() {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const hero = await client.getEntries({
		content_type: 'heroSection'
	})

	return (
		<main>
			<Hero hero={hero.items[0]} />
		</main>
	)
}
