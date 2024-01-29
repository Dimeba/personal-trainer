// styles
import styles from './Hero.module.scss'

// components
import Container from './Container'
import Image from 'next/image'
import ImageContainer from './ImageContainer'

const Hero = ({ hero }) => {
	return (
		<section id='hero' className={styles.hero}>
			<Container>
				<div className={styles.heroHeadline}>
					<div>
						<p className={styles.name}>{hero.fields.name}</p>
						<h1>{hero.fields.tagline.toUpperCase()}</h1>
					</div>
					<hr />
					<p>{hero.fields.subtitle}</p>
					<a href='#kontakt'>
						<div className={styles.button}>
							<p>KONTAKT</p>
							<Image
								src='/arrow.svg'
								width={32}
								height={12}
								alt='Button Arrow'
							/>
						</div>
					</a>
				</div>
			</Container>

			<Container>
				<ImageContainer
					src='/heroMobile.jpg'
					className={styles.mobileHero}
					alt='Hero Image'
				/>
				<div id='o-meni' className={styles.highlights}>
					<div className={styles.highlight}>
						<h1>{hero.fields.clients}</h1>
						<p>Zadovoljnih Klijenata</p>
					</div>

					<div className={styles.highlight}>
						<h1>{hero.fields.experience}</h1>
						<p>Godina Iskustva</p>
					</div>

					<p className={styles.description}>{hero.fields.description}</p>
				</div>
			</Container>
		</section>
	)
}

export default Hero
